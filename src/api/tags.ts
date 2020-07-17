import http from '../utils/http'

import { Tag } from '../types/Tag'

export const getTags = async (
  key: string,
  workspace: string
): Promise<Tag[]> => {
  const { data } = await http.get(`/workspaces/${workspace}/tags`)
  return data
}
