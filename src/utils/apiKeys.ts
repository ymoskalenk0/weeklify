import { ApiKeys } from '../types/ApiKeys'

const getApiKeys = (): ApiKeys | null => {
  const apiKeysStr = localStorage.getItem('apiKeys') as string
  const apiKeys = apiKeysStr ? JSON.parse(apiKeysStr) : null
  return apiKeys
}

export default getApiKeys
