import { useQuery } from 'react-query'

import http from '../utils/http'

import { Project } from '../types/Project'

const getProjects = async (): Promise<Project[]> => {
  const { data } = await http.get(
    '/workspaces/5eba7650b068fd4ae875af40/projects'
  )
  return data
}

export default function useProjects() {
  return useQuery('projects', getProjects)
}
