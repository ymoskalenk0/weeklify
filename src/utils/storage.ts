import { ApiKeys } from '../types/ApiKeys'

export const setDefaultWorkspace = (defaultWorkspace: string): void => {
  localStorage.setItem('defaultWorkspace', defaultWorkspace)
}

export const getDefaultWorkspace = (): string => {
  return localStorage.getItem('defaultWorkspace') || ''
}

export const setApiKeys = (keys: ApiKeys): void => {
  localStorage.setItem('apiKeys', JSON.stringify(keys))
}

export const getApiKeys = (): ApiKeys | null => {
  const apiKeysStr = localStorage.getItem('apiKeys') as string
  const apiKeys = apiKeysStr ? JSON.parse(apiKeysStr) : null
  return apiKeys
}
