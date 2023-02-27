import * as Yup from 'yup'
import { messages } from './messages'
const { fieldRequired, emailValid, passwordDoesntMatch, cpfMustHas11Digits } = messages

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired),
  email: Yup.string().email(emailValid).required(fieldRequired),
  password: Yup.string().required(fieldRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], passwordDoesntMatch)
    .required(fieldRequired)
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().email(emailValid).required(fieldRequired),
  password: Yup.string().required(fieldRequired)
})

export const editUserSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired),
  email: Yup.string().email(emailValid).required(fieldRequired),
  cpf: Yup.string()
    .max(11, cpfMustHas11Digits)
    .min(11, cpfMustHas11Digits)
    .required(fieldRequired),
  phone: Yup.string().required(fieldRequired),
  password: Yup.string().required(fieldRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], passwordDoesntMatch)
    .required(fieldRequired)
})
