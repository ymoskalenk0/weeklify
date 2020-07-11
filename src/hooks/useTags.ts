import { useQuery } from 'react-query'

import { getTags } from '../api/tags'

export default function useTags() {
  return useQuery('tags', getTags)
}
