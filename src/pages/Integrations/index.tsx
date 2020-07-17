import React, { FormEvent, useState, useRef, useContext } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToast,
  IonListHeader,
} from '@ionic/react'

import UserAuthContext from '../../contexts/UserAuth'

const Integrations = () => {
  const clockifyRef = useRef<HTMLIonInputElement>(null)
  const [showToast, setShowToast] = useState(false)
  const { apiKeys, setApiKeys } = useContext(UserAuthContext)

  const saveChanges = (event: FormEvent) => {
    event.preventDefault()
    const clockify = clockifyRef.current!.value as string
    setApiKeys!({ ...apiKeys, clockify })
    setShowToast(true)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          {/* <IonButtons slot="primary">
            <IonButton onClick={() => setShowActionSheet(true)}>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} />
            </IonButton>
          </IonButtons> */}
          <IonTitle>Integrations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={saveChanges}>
          <IonList lines="full" className="ion-no-margin ion-no-padding">
            <IonListHeader>
              <IonLabel>API</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel position="floating">Clockify API key</IonLabel>
              <IonInput ref={clockifyRef} value={apiKeys!.clockify} />
            </IonItem>
          </IonList>
          <div className="ion-padding">
            <IonButton type="submit" expand="block">
              Save
            </IonButton>
          </div>
        </form>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          color="dark"
          message="Your settings have been saved"
          duration={3000}
        />
      </IonContent>
    </IonPage>
  )
}

export default Integrations
