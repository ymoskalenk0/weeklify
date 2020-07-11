import http from '../utils/http'

import { Task } from '../types/Task'

export const getTasks = async (
  key: string,
  pid: string,
  isActive: boolean
): Promise<Task[]> => {
  const { data } = await http.get(
    `/workspaces/5eba7650b068fd4ae875af40/projects/${pid}/tasks?is-active=${isActive}`
  )

  return data
}
