import React from 'react'
import { IonText } from '@ionic/react'

interface ScreenMessageProps {
  message: string
}

const ScreenMessage: React.FC<ScreenMessageProps> = ({ message }) => {
  return <IonText>{message}</IonText>
}

export default ScreenMessage
