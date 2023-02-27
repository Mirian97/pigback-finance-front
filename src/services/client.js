import api from './api'
import { getHeaders } from './user'

export async function listClients(token) {
  const { data } = await api.get('/clients', { ...getHeaders(token) })
  return data
}

export async function detailClient(token, id) {
  const { data } = await api.get(`/client/${id}`, { ...getHeaders(token) })
  return data
}

export async function registerClient(token, values) {
  const { data } = await api.post('/clients', { ...values }, { ...getHeaders(token) })
  return data
}

export async function updateClient(token, id, values) {
  const { data } = await api.patch(
    `/client/${id}`,
    { ...values },
    { ...getHeaders(token) }
  )
  return data
}
