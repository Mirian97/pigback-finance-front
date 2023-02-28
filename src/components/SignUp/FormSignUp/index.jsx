import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useGlobal from '../../../hooks/useGlobal'
import { registerUser } from '../../../services/user'
import { CustomButtonLink, CustomButtonPrimary } from '../../../styles/buttons'
import { messageError } from '../../../utils/messages'
import {
  firstStepSignUpSchema,
  secondStepSignUpSchema
} from '../../../validations/userSchema'
import { CustomFormSignUp, LinkToLogin } from './style'

export function FormSignUp() {
  const { currentStep, setCurrentStep, setOpenModalSuccessAddUser } = useGlobal()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(
      currentStep === 0 ? firstStepSignUpSchema : secondStepSignUpSchema
    )
  })

  async function onSubmit({ name, email, password }) {
    if (currentStep === 0) {
      setCurrentStep(1)
    }
    try {
      if (currentStep === 1) {
        await registerUser(name, email, password)
        setCurrentStep(2)
        setOpenModalSuccessAddUser(true)
      }
    } catch (error) {
      messageError(error.response.data.mensagem)
      setCurrentStep(0)
    }
  }

  function renderFistStepSignUp() {
    return (
      <>
        <Typography variant='h2' color='grey100' align='center' mb={4}>
          Adicione seus dados
        </Typography>
        <Grid container spacing={2.5} mb={5}>
          <Grid item xs={12}>
            <InputLabel htmlFor='name'>Nome*</InputLabel>
            <TextField
              id='name'
              placeholder='Digite seu nome'
              variant='outlined'
              {...register('name')}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='email'>Email*</InputLabel>
            <TextField
              id='email'
              placeholder='Digite seu e-mail'
              variant='outlined'
              {...register('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              fullWidth
            />
          </Grid>
        </Grid>
        <CustomButtonPrimary
          variant='contained'
          type='button'
          onClick={handleSubmit(onSubmit)}
        >
          Continuar
        </CustomButtonPrimary>
      </>
    )
  }

  function renderSecondStepSignUp() {
    return (
      <>
        <Typography variant='h2' color='grey100' align='center' mb={4}>
          Adicione seus dados
        </Typography>
        <Grid container spacing={2.5} mb={5}>
          <Grid item xs={12}>
            <InputLabel htmlFor='password'>Senha*</InputLabel>
            <TextField
              id='password'
              placeholder='Digite sua senha'
              variant='outlined'
              type='password'
              {...register('password')}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='confirmPassword'>Repita a senha*</InputLabel>
            <TextField
              id='confirmPassword'
              placeholder='Repita a senha'
              variant='outlined'
              type='password'
              {...register('confirmPassword')}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
              fullWidth
            />
          </Grid>
        </Grid>
        <CustomButtonPrimary
          variant='contained'
          type='button'
          onClick={handleSubmit(onSubmit)}
        >
          Finalizar Cadastro
        </CustomButtonPrimary>
      </>
    )
  }

  return (
    <CustomFormSignUp>
      {currentStep === 0 && renderFistStepSignUp()}
      {currentStep === 1 && renderSecondStepSignUp()}
      <LinkToLogin>
        Já possui uma conta? Faça seu
        <CustomButtonLink>
          <Link to='/'>Login</Link>
        </CustomButtonLink>
      </LinkToLogin>
    </CustomFormSignUp>
  )
}
