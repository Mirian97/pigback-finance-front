import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { login } from '../../services/user'
import { CustomButtonLink, CustomButtonPrimary } from '../../styles/buttons'
import { messageError } from '../../utils/messages'
import { loginSchema } from '../../validations/userSchema'
import { ContainerLogin, CustomContainerPassword, CustomFormLogin } from './style'

function Login() {
  const { setToken, token, setUser } = useUser()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  async function onSubmit({ email, password }) {
    try {
      const result = await login(email, password)
      const { token, ...userData } = result
      setToken(token)
      setUser(userData)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  useEffect(() => {
    token && navigate('/home')
  }, [token, navigate])

  return (
    <ContainerLogin>
      <div className='login-left'>
        <Typography variant='h2' color='secondary.dark' align='center' width={388}>
          Gerencie todos os pagamentos da sua empresa em um só lugar.
        </Typography>
      </div>
      <div className='container-login'>
        <Typography variant='h2' mb={4}>
          Faça seu login!
        </Typography>
        <CustomFormLogin component='form' onSubmit={handleSubmit(onSubmit)}>
          <Grid container mb={5} spacing={2.5}>
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
            <Grid item xs={12}>
              <CustomContainerPassword>
                <div className='forgot-password'>
                  <InputLabel htmlFor='password'>Senha*</InputLabel>
                  <CustomButtonLink>
                    <Link to='forgot-password'>Esqueceu a senha?</Link>
                  </CustomButtonLink>
                </div>
                <TextField
                  id='password'
                  type='password'
                  placeholder='Digite sua senha'
                  variant='outlined'
                  {...register('password')}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  fullWidth
                />
              </CustomContainerPassword>
            </Grid>
          </Grid>
          <CustomButtonPrimary type='submit' variant='contained'>
            Entrar
          </CustomButtonPrimary>
        </CustomFormLogin>
        <div className='container-sign-up'>
          <span>Ainda não possui uma conta?</span>
          <CustomButtonLink>
            <Link to='/sign-up'> Cadastre-se</Link>
          </CustomButtonLink>
        </div>
      </div>
    </ContainerLogin>
  )
}

export default Login
