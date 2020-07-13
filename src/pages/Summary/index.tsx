import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonActionSheet,
  IonList,
  IonListHeader,
  IonLabel,
  IonToast,
} from '@ionic/react'
import { ellipsisHorizontal } from 'ionicons/icons'
import copy from 'copy-to-clipboard'

import ModalSummaryFilter from '../../components/ModalSummaryFilter'
import TimeSpent from '../../components/TimeSpent'
import TaskListSkeleton from '../../components/TaskListSkeleton'
import TimeEntryList from '../../components/TimeEntryList'

import useSummary from '../../hooks/useSummary'

import { SummaryFilter, AvailableDate } from '../../types/SummaryFilter'
import { TimeEntry } from '../../types/TimeEntry'

import dayjs from '../../utils/dayjs'

const Summary: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [showActionSheet, setShowActionSheet] = useState(false)
  const [showCopyToast, setShowCopyToast] = useState(false)
  const [filter, setFilter] = useState<SummaryFilter>({
    date: AvailableDate.Today,
  })

  const { isFetching, data: summary } = useSummary(filter)

  const onSetFilter = (filter: SummaryFilter) => {
    setFilter(filter)
    setShowModal(false)
  }

  const onCopyToClipboard = () => {
    const date = dayjs().format('DD.MM.YYYY')

    const timeEntriesStr = summary?.entries
      .map((entry) => {
        const { projectName, items } = entry
        const itemsStr = items
          .map((item) => {
            const { name, duration } = item
            return `- ${name} - ${duration}`
          })
          .join('\n')

        return `${projectName}\n${itemsStr}`
      })
      .join('\n')

    const reportStr = `${date}\n${timeEntriesStr}`

    copy(reportStr as string)
    setShowCopyToast(true)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Summary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Summary</IonTitle>
            <IonButtons slot="primary">
              <IonButton onClick={() => setShowActionSheet(true)}>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <TimeSpent duration={summary?.timeSpent as string} />
        <IonList>
          <IonListHeader>
            <IonLabel>Time entries</IonLabel>
          </IonListHeader>
          {isFetching ? (
            <TaskListSkeleton />
          ) : (
            <TimeEntryList items={summary?.entries as TimeEntry[]} />
          )}
        </IonList>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: 'Filter',
            handler: () => {
              setShowModal(true)
            },
          },
          {
            text: 'Copy',
            handler: () => {
              onCopyToClipboard()
            },
          },
          { text: 'Cancel', role: 'cancel' },
        ]}
      />
      <ModalSummaryFilter
        showModal={showModal}
        setShowModal={setShowModal}
        setFilter={onSetFilter}
      />
      <IonToast
        isOpen={showCopyToast}
        onDidDismiss={() => setShowCopyToast(false)}
        color="dark"
        message="Copied successfully to the clipboard"
        duration={3000}
      />
    </IonPage>
  )
}

export default Summary
