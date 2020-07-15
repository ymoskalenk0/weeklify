import { createContext } from 'react'

import { ApiKeys } from '../types/ApiKeys'

interface ApiKeysContextProps {
  isUserValid: boolean
  apiKeys: ApiKeys
  setApiKeys: (keys: Partial<ApiKeys>) => void
}

const ApiKeysContext = createContext<Partial<ApiKeysContextProps>>({})

export default ApiKeysContext
