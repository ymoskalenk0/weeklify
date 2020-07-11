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
  IonCheckbox,
} from '@ionic/react'

import { TaskFilter, TaskStatus } from '../../types/TaskFilter'
import { Tag } from '../../types/Tag'

interface ModalFilterProps {
  showModal: boolean
  setShowModal: (status: boolean) => void
  setFilter: (filter: TaskFilter) => void
  availableTags: Tag[]
}

const ModalTaskFilter: React.FC<ModalFilterProps> = ({
  showModal,
  setShowModal,
  setFilter,
  availableTags,
}) => {
  const [show, setShow] = useState(TaskStatus.Active)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setFilter({ show, selectedTags })}>
              Done
            </IonButton>
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Show</IonLabel>
          </IonListHeader>
          <IonRadioGroup
            value={show}
            onIonChange={(e) => setShow(e.detail.value)}
          >
            <IonItem>
              <IonLabel>Active</IonLabel>
              <IonRadio slot="start" value={TaskStatus.Active} />
            </IonItem>
            <IonItem>
              <IonLabel>Done</IonLabel>
              <IonRadio slot="start" value={TaskStatus.Done} />
            </IonItem>
            <IonItem>
              <IonLabel>All</IonLabel>
              <IonRadio slot="start" value={TaskStatus.All} />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        {/* <IonList>
          <IonListHeader>
            <IonLabel>Tags</IonLabel>
          </IonListHeader>
          {availableTags.map((tag) => (
            <IonItem key={tag.id}>
              <IonLabel>{tag.name}</IonLabel>
              <IonCheckbox
                slot="start"
                value={tag.id}
                onIonChange={(e) =>
                  setSelectedTags([...selectedTags, e.detail.value])
                }
              />
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonModal>
  )
}

export default ModalTaskFilter
