import React from 'react'
import {
  IonListHeader,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react'

interface TimeSpentProps {
  duration: string
}

const TimeSpent: React.FC<TimeSpentProps> = ({ duration }) => (
  <>
    <IonListHeader>
      <IonLabel>Total</IonLabel>
    </IonListHeader>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{duration}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  </>
)

export default TimeSpent
