import * as Yup from 'yup'
import { messages } from './messages'
const { fieldRequired, numberValid, dateValid } = messages

export const signUpChargeSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired),
  description: Yup.string().required(fieldRequired),
  due_date: Yup.date(dateValid).required(fieldRequired),
  amount: Yup.number(numberValid).required(fieldRequired),
  status: Yup.bool().required(fieldRequired)
})
