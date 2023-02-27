import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import iconClose from '../../../assets/btn-close.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { updateUser } from '../../../services/user'
import { CustomBackdrop } from '../../../styles/backdrop'
import { CustomButtonPrimary } from '../../../styles/buttons'
import { deleteEmptyProperties } from '../../../utils/functions'
import { messageError } from '../../../utils/messages'
import { editUserSchema } from '../../../validations/userSchema'
import { CustomModalEditUser } from './style'

function ModalEditUser() {
  const { token, user, setUser } = useUser()
  const { openModalEditUser, setOpenModalEditUser, setOpenModalSuccessEditUser } =
    useGlobal()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(editUserSchema)
  })

  async function onSubmit(values) {
    const submitValues = values
    deleteEmptyProperties(submitValues)
    try {
      const result = await updateUser(token, submitValues)
      setUser(result)
      handleResetPasswordAndConfirm()
      setOpenModalEditUser(false)
      setOpenModalSuccessEditUser(true)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  function handleResetPasswordAndConfirm() {
    reset({ password: '', confirmPassword: '' })
  }

  return (
    <CustomBackdrop open={openModalEditUser}>
      <CustomModalEditUser className='modal-edit-user' onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h2' mb={3}>
          Edite seu cadastro
        </Typography>
        <img
          src={iconClose}
          alt='Ícone de fechar'
          className='btn-close'
          onClick={() => setOpenModalEditUser(false)}
        />
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <InputLabel htmlFor='name'>Nome*</InputLabel>
            <TextField
              id='name'
              placeholder='Digite seu nome'
              variant='outlined'
              defaultValue={user.name}
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
              defaultValue={user.email}
              {...register('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Grid item sm={6} xs={12}>
              <InputLabel htmlFor='cpf'>CPF</InputLabel>
              <TextField
                id='cpf'
                placeholder='Digite seu CPF'
                variant='outlined'
                defaultValue={user.cpf}
                {...register('cpf')}
                error={Boolean(errors.cpf)}
                helperText={errors.cpf?.message}
                fullWidth
                inputProps={{
                  maxLength: 11
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputLabel htmlFor='phone'>Telefone</InputLabel>
              <TextField
                id='phone'
                placeholder='Digite seu telefone'
                variant='outlined'
                defaultValue={user.phone}
                {...register('phone')}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
                fullWidth
                inputProps={{
                  maxLength: 15
                }}
              />
            </Grid>
          </Grid>
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
          <Grid item xs={12} mb={2}>
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
        <CustomButtonPrimary variant='contained' type='submit'>
          Aplicar
        </CustomButtonPrimary>
      </CustomModalEditUser>
    </CustomBackdrop>
  )
}

export default ModalEditUser
