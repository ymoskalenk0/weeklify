import { useQuery } from 'react-query'

import { getTags } from '../api/tags'

import { getDefaultWorkspace } from '../utils/storage'

export default function useTags() {
  const workspace = getDefaultWorkspace()
  return useQuery(['tags', workspace], getTags)
}
