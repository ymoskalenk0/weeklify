import http from '../utils/http'

import { Project } from '../types/Project'

export const getProject = async (pid: string): Promise<Project> => {
  const { data } = await http.get(
    `/workspaces/5eba7650b068fd4ae875af40/projects/${pid}`
  )

  return data
}
