import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonActionSheet,
  IonList,
  IonListHeader,
  IonLabel,
} from '@ionic/react'
import { ellipsisHorizontal } from 'ionicons/icons'

import TaskList from '../../components/TaskList'
import TaskListSkeleton from '../../components/TaskListSkeleton'
import ModalTaskFilter from '../../components/ModalTaskFilter'

import useProjectDetails from '../../hooks/useProjectDetails'
import useTags from '../../hooks/useTags'
import useTasks from '../../hooks/useTasks'

import { TaskFilter, TaskStatus } from '../../types/TaskFilter'
import { Task } from '../../types/Task'
import { Tag } from '../../types/Tag'

interface ProjectDetailsProps extends RouteComponentProps<{ pid: string }> {}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ match }) => {
  const { pid } = match.params

  const [showActionSheet, setShowActionSheet] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isActive, setIsActive] = useState(true)

  const { data: projectDetails } = useProjectDetails(pid)
  // TODO: filter tasks by tags
  const { isFetching: isTasksFetching, data: tasks } = useTasks(pid, isActive)
  const { isFetching: isTagsFetching, data: tags } = useTags()

  const onSetFilter = (filter: TaskFilter) => {
    const isActive = filter.show === TaskStatus.Active
    setShowModal(false)
    setIsActive(isActive)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/projects" />
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton onClick={() => setShowActionSheet(true)}>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} />
            </IonButton>
          </IonButtons>
          <IonTitle>{projectDetails?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Tasks</IonLabel>
          </IonListHeader>
          {isTasksFetching ? (
            <TaskListSkeleton />
          ) : (
            <TaskList items={tasks as Task[]} />
          )}
        </IonList>
        {!isTagsFetching && (
          <ModalTaskFilter
            showModal={showModal}
            setShowModal={setShowModal}
            setFilter={onSetFilter}
            availableTags={tags as Tag[]}
          />
        )}
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text: 'Filter',
              handler: () => {
                setShowModal(true)
              },
            },
            {
              text: 'Copy',
              handler: () => {
                console.log('Copy clicked')
              },
            },
            { text: 'Cancel', role: 'cancel' },
          ]}
        />
      </IonContent>
    </IonPage>
  )
}

export default ProjectDetails
