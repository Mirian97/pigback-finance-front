import api from './api'
import { getHeaders } from './user'

export async function listCharges(token) {
  const { data } = await api.get('/charges', { ...getHeaders(token) })
  return data
}

export async function registerCharge(token, values) {
  const { data } = await api.post('/charge', { ...values }, { ...getHeaders(token) })
  return data
}

export async function updateCharge(token, id, values) {
  const { data } = await api.patch(
    `/charge/${id}`,
    { ...values },
    { ...getHeaders(token) }
  )
  return data
}

export async function deleteCharge(token, id) {
  return await api.delete(`/charge/${id}`, { ...getHeaders(token) })
}

export async function getDashboard(token) {
  const { data } = await api.get('/dashboard', { ...getHeaders(token) })
  return data
}
