import React from 'react'
import {
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonBadge,
} from '@ionic/react'

import { Task } from '../../types/Task'

interface TaskItemProps {
  item: Task
}

const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
  const { name, duration } = item

  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{name}</IonLabel>
        <IonBadge>{duration}</IonBadge>
      </IonItem>
      <IonItemOptions side="start">
        <IonItemOption onClick={() => {}}>Set estimate</IonItemOption>
        <IonItemOption color="success" onClick={() => {}}>
          Mark as done
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={() => {}}>
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

export default TaskItem
