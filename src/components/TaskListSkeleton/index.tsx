import React from 'react'
import { IonItem, IonLabel, IonSkeletonText, IonList } from '@ionic/react'

const TaskListSkeleton: React.FC = () => {
  const Skeleton = () => (
    <IonItem>
      <IonLabel>
        <IonSkeletonText animated style={{ width: '80%' }} />
      </IonLabel>
    </IonItem>
  )

  return (
    <IonList>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </IonList>
  )
}

export default TaskListSkeleton
