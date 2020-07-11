import { useQuery } from 'react-query'

import { getTasks } from '../api/tasks'

export default function useTasks(pid: string, isActive: boolean) {
  return useQuery(['tasks', pid, isActive], getTasks)
}
