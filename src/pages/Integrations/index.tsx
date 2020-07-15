import React, { FormEvent, useState, useEffect, useRef } from 'react'
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

import { ApiKeys } from '../../types/ApiKeys'

const Integrations = () => {
  const clockifyRef = useRef<HTMLIonInputElement>(null)
  const [apiKeys, setApiKeys] = useState<ApiKeys>({})
  const [isInitialRender, setIsInitialRender] = useState(true)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const apiKeysStr = localStorage.getItem('apiKeys')
    apiKeysStr && setApiKeys(JSON.parse(apiKeysStr))
    setIsInitialRender(false)
  }, [])

  useEffect(() => {
    !isInitialRender && localStorage.setItem('apiKeys', JSON.stringify(apiKeys))
  }, [apiKeys, isInitialRender])

  const saveChanges = (event: FormEvent) => {
    event.preventDefault()
    const clockify = clockifyRef.current!.value as string
    setApiKeys({ ...apiKeys, clockify })
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
              <IonInput ref={clockifyRef} value={apiKeys.clockify} />
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
