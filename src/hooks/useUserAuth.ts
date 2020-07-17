import { useState, useEffect } from 'react'

import * as storage from '../utils/storage'

import { getUser } from '../api/user'

import { ApiKeys } from '../types/ApiKeys'

export default function useUserAuthKeys() {
  const [apiKeys, setApiKeys] = useState<ApiKeys>({})
  const [isUserValid, setIsUserValid] = useState(false)
  const [isUserLoading, setIsUserLoading] = useState(true)
  const [defaultWorkspace, setDefaultWorkspace] = useState<string>('')

  useEffect(() => {
    const keys = storage.getApiKeys()

    if (keys) {
      const workspace = storage.getDefaultWorkspace()
      setApiKeys(keys)
      setDefaultWorkspace(workspace)
    }
  }, [])

  useEffect(() => {
    const checkIsUserValid = async () => {
      if (Object.keys(apiKeys).length) {
        storage.setApiKeys(apiKeys)

        const user = await getUser()
        const isValid = user !== null

        setIsUserValid(isValid)

        if (isValid) {
          const workspace = user.defaultWorkspace
          storage.setDefaultWorkspace(workspace)
        }
      }

      setTimeout(() => setIsUserLoading(false), 1500)
    }

    checkIsUserValid()
  }, [apiKeys])

  return {
    isUserLoading,
    isUserValid,
    defaultWorkspace,
    apiKeys,
    setApiKeys,
    setIsUserLoading,
  }
}
