import { TimeEntry } from './TimeEntry'

export interface Summary {
  timeSpent: string
  entries: TimeEntry[]
}
