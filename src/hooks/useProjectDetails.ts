import { useQuery } from 'react-query'

import http from '../utils/http'

const getProject = (pid: string) => async () => {
  const { data: project } = await http.get(
    `/workspaces/5eba7650b068fd4ae875af40/projects/${pid}`
  )
  const { data: tasks } = await http.get(
    `/workspaces/5eba7650b068fd4ae875af40/projects/${pid}/tasks`
  )

  return { project, tasks }
}

export default function useProjectDetails(pid: string) {
  return useQuery('project', getProject(pid))
}
