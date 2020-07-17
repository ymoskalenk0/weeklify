import { useQuery } from 'react-query'

import { getProject } from '../api/project'

import { getDefaultWorkspace } from '../utils/storage'

export default function useProjectDetails(pid: string) {
  const workspace = getDefaultWorkspace()
  return useQuery('project', () => getProject(pid, workspace))
}
