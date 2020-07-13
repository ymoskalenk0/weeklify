export enum TaskStatus {
  Active = 'ACTIVE',
  Done = 'DONE',
  All = 'ALL',
}

export interface TaskFilter {
  show: TaskStatus
  selectedTags: string[]
}
