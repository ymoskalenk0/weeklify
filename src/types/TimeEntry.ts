import { Task } from './Task'

export interface TimeEntry {
  id: string
  projectName: string
  items: Task[]
}
