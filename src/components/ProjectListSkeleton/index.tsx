import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonSkeletonText,
  IonCardTitle,
} from '@ionic/react'

const ProjectListSkeleton: React.FC = () => {
  const Skeleton = () => (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonSkeletonText animated style={{ width: '20%' }} />
        </IonCardSubtitle>
        <div className="project-item-skeleton-title-wrapper">
          <IonSkeletonText className="project-item-skeleton-color" />
          <IonCardTitle style={{ width: '100%' }}>
            <IonSkeletonText
              animated
              style={{ width: '60%', height: '1.5rem' }}
            />
          </IonCardTitle>
        </div>
      </IonCardHeader>
    </IonCard>
  )

  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  )
}

export default ProjectListSkeleton
