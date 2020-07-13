import http from '../utils/http'

import { Tag } from '../types/Tag'

export const getTags = async (): Promise<Tag[]> => {
  const { data } = await http.get('/workspaces/5eba7650b068fd4ae875af40/tags')
  return data
}
