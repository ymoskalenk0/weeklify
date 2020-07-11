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
  IonModal,
} from '@ionic/react'
import { ellipsisHorizontal } from 'ionicons/icons'

import TaskList from '../../components/TaskList'
import TaskListSkeleton from '../../components/TaskListSkeleton'

import useProjectDetails from '../../hooks/useProjectDetails'

interface ProjectDetailsProps extends RouteComponentProps<{ pid: string }> {}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ match }) => {
  const { status, data: details, error, isFetching } = useProjectDetails(
    match.params.pid
  )
  const [showActionSheet, setShowActionSheet] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
          <IonTitle>{details?.project.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Tasks</IonLabel>
          </IonListHeader>
          {isFetching ? (
            <TaskListSkeleton />
          ) : (
            <TaskList items={details?.tasks} />
          )}
        </IonList>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => setShowModal(false)}>
                  Cancel
                </IonButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonButton onClick={() => {}}>Done</IonButton>
              </IonButtons>
              <IonTitle>Filter</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonModal>
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
            {
              text: 'Generate',
              handler: () => {
                console.log('Generate clicked')
              },
            },
            { text: 'Cancel', role: 'cancel' },
          ]}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  )
}

export default ProjectDetails
