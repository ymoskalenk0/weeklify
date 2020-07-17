import http from '../utils/http'

import { Task } from '../types/Task'

export const getTasks = async (
  key: string,
  pid: string,
  workspace: string,
  isActive: boolean
): Promise<Task[]> => {
  const { data } = await http.get(
    `/workspaces/${workspace}/projects/${pid}/tasks?is-active=${isActive}`
  )

  // TODO: create response types
  const tasks = data.map((task: any) => {
    let duration = '0m'

    const timeMatch = task.duration
      .toLowerCase()
      .match(/^(?:PT)([0-9]{1,2}H)?([0-9]{1,2}M)/i)

    if (timeMatch) {
      const [, h, m] = timeMatch
      duration = `${h || ''} ${m || ''}`
    }

    return {
      id: task.id,
      name: task.name,
      duration,
    }
  })

  return tasks
}
