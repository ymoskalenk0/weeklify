import { useQuery } from 'react-query'

import { getTasks } from '../api/tasks'

import { getDefaultWorkspace } from '../utils/storage'

export default function useTasks(pid: string, isActive: boolean) {
  const workspace = getDefaultWorkspace()
  return useQuery(['tasks', pid, workspace, isActive], getTasks)
}
