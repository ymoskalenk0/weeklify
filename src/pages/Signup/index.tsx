import React, {
  FormEvent,
  useRef,
  useContext,
  useState,
  useEffect,
} from 'react'
import { RouteComponentProps } from 'react-router'
import {
  IonPage,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonLoading,
} from '@ionic/react'

import './styles.css'

import ApiKeysContext from '../../contexts/ApiKeys'

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const clockifyRef = useRef<HTMLIonInputElement>(null)
  const loadingRef = useRef<HTMLIonLoadingElement>(null)

  const { isUserValid, apiKeys, setApiKeys } = useContext(ApiKeysContext)

  const [clockifyApiKey, setClockifyApiKey] = useState('')
  const [showLoading, setShowLoading] = useState(false)
  const [isAuthPresent, setIsAuthPresent] = useState(false)
  const [isLoadingPresent, setIsLoadingPresent] = useState(false)

  const signUp = (event: FormEvent) => {
    event.preventDefault()
    setShowLoading(true)
    setApiKeys!({ ...apiKeys, clockify: clockifyApiKey })
  }

  useEffect(() => {
    if (isUserValid) {
      history.push('/projects')
      setShowLoading(false)
    } else {
      setIsLoadingPresent(false)
      loadingRef.current?.dismiss()
    }
  }, [isLoadingPresent, isUserValid, history])

  useEffect(() => {
    if (!isUserValid && apiKeys?.clockify?.length) {
      setIsAuthPresent(true)
    } else {
      setIsAuthPresent(false)
    }
  }, [isUserValid, apiKeys])

  return (
    <IonPage>
      <IonContent>
        <div className="signup-container">
          <IonText>
            <h1 className="signup-title">Welcome back</h1>
          </IonText>
          <div className="ion-padding">
            <IonText className="signup-text">
              This is the <b>Weeklify</b>, a report management application based
              on Clockify. To get started, add your Clockify API key
            </IonText>
          </div>
          <form onSubmit={signUp}>
            <IonList lines="full" className="ion-no-margin ion-no-padding">
              <IonItem>
                <IonLabel position="floating">Clockify API key</IonLabel>
                <IonInput
                  ref={clockifyRef}
                  value={clockifyApiKey}
                  onIonChange={(e) => {
                    setClockifyApiKey(e.detail.value!)
                  }}
                />
              </IonItem>
            </IonList>
            {isAuthPresent && (
              <IonText color="danger">Error: Invalid API key</IonText>
            )}
            <div className="ion-padding">
              <IonButton
                type="submit"
                expand="block"
                disabled={!clockifyApiKey}
              >
                Save &amp; Continue
              </IonButton>
            </div>
          </form>
        </div>
        <IonLoading
          ref={loadingRef}
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          onDidPresent={() => setIsLoadingPresent(true)}
          message={'Please wait...'}
        />
      </IonContent>
    </IonPage>
  )
}

export default Signup
