import api from './api'

export async function registerUser(name, email, password) {
  await api.post('/users', {
    name,
    email,
    password
  })
}

export async function login(email, password) {
  const { data } = await api.post('/login', { email, password })
  return data
}

export function getHeaders(token) {
  const Authorization = { headers: { authorization: `Bearer ${token}` } }
  return Authorization
}

export async function detailUser(token) {
  const { data } = await api.get('/user', { ...getHeaders(token) })
  return data
}

export async function updateUser(token, values) {
  const { confirmPassword, ...restValues } = values
  const { data } = await api.patch('/user', { ...restValues }, { ...getHeaders(token) })
  return data
}
