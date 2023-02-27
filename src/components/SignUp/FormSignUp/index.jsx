import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useGlobal from '../../../hooks/useGlobal'
import { registerUser } from '../../../services/user'
import { CustomButtonLink, CustomButtonPrimary } from '../../../styles/buttons'
import { messageError } from '../../../utils/messages'
import { signUpSchema } from '../../../validations/userSchema'
import { CustomFormSignUp, LinkToLogin } from './style'

export function FormSignUp() {
  const { currentStep, setCurrentStep, setOpenModalSuccessAddUser } = useGlobal()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  async function onSubmit({ name, email, password }) {
    try {
      await registerUser(name, email, password)
      setCurrentStep(2)
      setOpenModalSuccessAddUser(true)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  function handleUpdateStep() {
    const { name, email, password, confirmPassword } = getValues()
    if (currentStep === 0 && name && email) {
      setCurrentStep(1)
    }
    if (currentStep === 1 && password && confirmPassword) {
      handleSubmit(onSubmit)
    }
  }

  return (
    <CustomFormSignUp onSubmit={handleSubmit(onSubmit)}>
      {currentStep === 0 && (
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
        </>
      )}
      {currentStep === 1 && (
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
        </>
      )}
      <CustomButtonPrimary variant='contained' type='submit' onClick={handleUpdateStep}>
        {currentStep === 0 ? 'Continuar' : 'Finalizar Cadastro'}
      </CustomButtonPrimary>
      <LinkToLogin>
        Já possui uma conta? Faça seu
        <CustomButtonLink>
          <Link to='/'>Login</Link>
        </CustomButtonLink>
      </LinkToLogin>
    </CustomFormSignUp>
  )
}
