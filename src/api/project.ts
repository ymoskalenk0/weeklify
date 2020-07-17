import http from '../utils/http'

import { Project } from '../types/Project'

export const getProject = async (
  pid: string,
  workspace: string
): Promise<Project> => {
  const { data } = await http.get(`/workspaces/${workspace}/projects/${pid}`)

  return data
}
