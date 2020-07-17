import { createContext } from 'react'

import { ApiKeys } from '../types/ApiKeys'

interface UserAuhContextProps {
  isUserLoading: boolean
  isUserValid: boolean
  defaultWorkspace: string
  apiKeys: ApiKeys
  setApiKeys: (keys: Partial<ApiKeys>) => void
  setIsUserLoading: (status: boolean) => void
}

const UserAuhContext = createContext<Partial<UserAuhContextProps>>({})

export default UserAuhContext
