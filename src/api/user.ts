import http from '../utils/http'

export const getUser = async () => {
  try {
    const { data } = await http.get('/user')
    return data
  } catch (err) {
    return null
  }
}
