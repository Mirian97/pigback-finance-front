import axios from 'axios'
import { messageError } from '../utils/messages'

export async function searchZipcode(zipCode) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json`)
    if (data.erro) return messageError('CEP inválido')
    return data
  } catch (error) {
    return messageError('CEP inválido')
  }
}
