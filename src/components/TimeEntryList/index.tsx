import React from 'react'
import { IonItemGroup, IonLabel, IonItemDivider } from '@ionic/react'

import TaskItem from '../TaskItem'

import { TimeEntry } from '../../types/TimeEntry'

interface TimeEntryListProps {
  items: TimeEntry[]
}

const TimeEntryList: React.FC<TimeEntryListProps> = ({ items }) => (
  <>
    {items.map((project) => (
      <IonItemGroup key={project.id}>
        <IonItemDivider>
          <IonLabel>{project.projectName}</IonLabel>
        </IonItemDivider>
        {project.items.map((item) => (
          <TaskItem key={item.id} item={item} />
        ))}
      </IonItemGroup>
    ))}
  </>
)

export default TimeEntryList
