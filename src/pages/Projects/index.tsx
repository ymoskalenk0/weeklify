import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

import './styles.css'

import ProjectList from '../../components/ProjectList'
import ProjectListSkeleton from '../../components/ProjectListSkeleton'

import useProjects from '../../hooks/useProjects'

import { Project } from '../../types/Project'

const Projects: React.FC = () => {
  // TODO: pass active workspace id
  const { status, data: projects, error, isFetching } = useProjects()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        {isFetching ? (
          <ProjectListSkeleton />
        ) : (
          <ProjectList
            items={(projects as Project[]).map(
              ({ id, name, color }: Project) => ({
                id,
                name,
                color,
                href: `/projects/${id}`,
              })
            )}
          />
        )}
      </IonContent>
    </IonPage>
  )
}

export default Projects
