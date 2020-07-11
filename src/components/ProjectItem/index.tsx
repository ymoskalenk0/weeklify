import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react'

import './styles.css'

import { Project } from '../../types/Project'

interface ProjectItemProps {
  item: Project
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  const { name, color, href } = item

  return (
    <IonCard href={href}>
      <IonCardHeader>
        <IonCardSubtitle>No Client</IonCardSubtitle>
        <div className="project-item-title-wrapper">
          <i
            className="project-item-color"
            style={{ backgroundColor: color }}
          ></i>
          <IonCardTitle>{name}</IonCardTitle>
        </div>
      </IonCardHeader>
    </IonCard>
  )
}

export default ProjectItem
