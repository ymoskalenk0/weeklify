import React, { useState } from 'react'
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonList,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
  IonContent,
} from '@ionic/react'

import { SummaryFilter, AvailableDate } from '../../types/SummaryFilter'

interface ModalFilterProps {
  showModal: boolean
  setShowModal: (status: boolean) => void
  setFilter: (filter: SummaryFilter) => void
}

const ModalSummaryFilter: React.FC<ModalFilterProps> = ({
  showModal,
  setShowModal,
  setFilter,
}) => {
  const [date, setDate] = useState(AvailableDate.Today)

  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setFilter({ date })}>Done</IonButton>
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Date</IonLabel>
          </IonListHeader>
          <IonRadioGroup
            value={date}
            onIonChange={(e) => setDate(e.detail.value)}
          >
            <IonItem>
              <IonLabel>Today</IonLabel>
              <IonRadio slot="start" value={AvailableDate.Today} />
            </IonItem>
            <IonItem>
              <IonLabel>Yesterday</IonLabel>
              <IonRadio slot="start" value={AvailableDate.Yesterday} />
            </IonItem>
            <IonItem>
              <IonLabel>This week</IonLabel>
              <IonRadio slot="start" value={AvailableDate.ThisWeek} />
            </IonItem>
            <IonItem>
              <IonLabel>Last week</IonLabel>
              <IonRadio slot="start" value={AvailableDate.LastWeek} />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonModal>
  )
}

export default ModalSummaryFilter
