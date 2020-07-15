import { useState, useEffect } from 'react'

import getApiKeys from '../utils/apiKeys'

import { getUser } from '../api/user'

import { ApiKeys } from '../types/ApiKeys'

export default function useApiKeys() {
  const [apiKeys, setApiKeys] = useState<ApiKeys>({})
  const [isUserValid, setIsUserValid] = useState(false)

  useEffect(() => {
    const apiKeysFromStorage = getApiKeys()
    apiKeysFromStorage && setApiKeys(apiKeysFromStorage)
  }, [])

  useEffect(() => {
    if (Object.keys(apiKeys).length) {
      const checkIsUserValid = async () => {
        localStorage.setItem('apiKeys', JSON.stringify(apiKeys))

        const user = await getUser()
        const isValid = user !== null

        setIsUserValid(isValid)

        // if (isValid) {
        //   localStorage.setItem('apiKeys', JSON.stringify(apiKeys))
        // }
      }

      checkIsUserValid()
    }
  }, [apiKeys])

  return { isUserValid, apiKeys, setApiKeys }
}
