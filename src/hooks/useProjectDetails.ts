import { useQuery } from 'react-query'

import { getProject } from '../api/project'

export default function useProjectDetails(pid: string) {
  return useQuery('project', () => getProject(pid))
}
