import * as Yup from 'yup'
import { messages } from './messages'
const { fieldRequired, emailValid, cepMustHas8Digits, cpfMustHas11Digits } = messages

export const signUpClientSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired),
  email: Yup.string().email(emailValid).required(fieldRequired),
  cpf: Yup.string()
    .min(11, cpfMustHas11Digits)
    .max(11, cpfMustHas11Digits)
    .required(fieldRequired),
  phone: Yup.string().required(fieldRequired),
  address_1: Yup.string(),
  address_2: Yup.string(),
  zip_code: Yup.string().min(8, cepMustHas8Digits).max(8, cepMustHas8Digits),
  district: Yup.string(),
  city: Yup.string(),
  state: Yup.string()
})
