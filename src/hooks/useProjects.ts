import { useQuery } from 'react-query'

import http from '../utils/http'
import { getDefaultWorkspace } from '../utils/storage'

import { Project } from '../types/Project'

const getProjects = async (
  key: string,
  workspace: string
): Promise<Project[]> => {
  const { data } = await http.get(`/workspaces/${workspace}/projects`)
  return data
}

export default function useProjects() {
  const workspace = getDefaultWorkspace()
  return useQuery(['projects', workspace], getProjects)
}
