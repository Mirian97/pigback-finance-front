import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import closeIcon from '../../../assets/btn-close.svg'
import clientsIcon from '../../../assets/clients-disabled-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { registerClient, updateClient } from '../../../services/client'
import { searchZipcode } from '../../../services/zipCode'
import { CustomBackdrop } from '../../../styles/backdrop'
import { CustomButtonPrimary, CustomButtonSecondary } from '../../../styles/buttons'
import { deleteEmptyProperties } from '../../../utils/functions'
import { messageError } from '../../../utils/messages'
import { signUpClientSchema } from '../../../validations/clientSchema'
import { CustomModalSignUpClient } from './style.js'

function ModalAddEditClient({ edit }) {
  const { token, detailClient, setDetailClient, handleListClients } = useUser()
  const { notify, setNotify, openModalAddEditClient, setOpenModalAddEditClient } =
    useGlobal()

  const {
    reset,
    getValues,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpClientSchema)
  })

  async function onSubmit() {
    const submitValues = getValues()
    deleteEmptyProperties(submitValues)
    if (detailClient && edit) {
      await handleEditClient(submitValues)
    } else {
      await handleRegisterClient(submitValues)
    }
    handleCloseAndClearForm()
  }

  async function handleEditClient(body) {
    try {
      const result = await updateClient(token, detailClient.id, body)
      setDetailClient(result[0])
      notifySucessEditClient()
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  async function handleRegisterClient(body) {
    try {
      await registerClient(token, body)
      notifySucessRegisterClient()
      handleListClients()
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  function notifySucessRegisterClient() {
    setNotify({ ...notify, open: true, message: 'Cadastro concluído com sucesso!' })
  }

  function notifySucessEditClient() {
    setNotify({
      ...notify,
      open: true,
      message: 'Edições do cadastro concluídas com sucesso!'
    })
  }

  async function handleSearchZipCode({ target }) {
    if (target.value.length === 8) {
      const { logradouro, complemento, bairro, localidade, uf } = await searchZipcode(
        target.value
      )
      reset({
        address_1: logradouro,
        address_2: complemento,
        district: bairro,
        city: localidade,
        state: uf
      })
    }
  }

  function handleCloseAndClearForm() {
    setOpenModalAddEditClient(false)
    reset()
  }

  useEffect(() => {
    if (detailClient && edit) {
      const { id, ...restDetailClient } = detailClient
      reset({ ...restDetailClient })
    }
  }, [detailClient, reset, edit])

  return (
    <CustomBackdrop open={openModalAddEditClient}>
      <CustomModalSignUpClient onSubmit={handleSubmit(onSubmit)} disableGutters>
        <div className='modal-client-sign-up__title'>
          <img className='people-icon' src={clientsIcon} alt='Ícone de clientes' />
          <Typography variant='h1' align='left' ml={2}>
            {detailClient && edit ? 'Editar Cliente' : 'Cadastro do Cliente'}
          </Typography>
          <img
            className='close-icon'
            src={closeIcon}
            alt='Ícone de fechar'
            onClick={handleCloseAndClearForm}
          />
        </div>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <InputLabel htmlFor='name'>Nome*</InputLabel>
            <TextField
              id='name'
              placeholder='Digite o nome'
              variant='outlined'
              {...register('name')}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='email'>E-mail*</InputLabel>
            <TextField
              id='email'
              placeholder='Digite o e-mail'
              variant='outlined'
              {...register('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              fullWidth
            />
          </Grid>
          <Grid container item spacing={3}>
            <Grid item sm={6} xs={12}>
              <InputLabel htmlFor='cpf'>CPF*</InputLabel>
              <TextField
                id='cpf'
                placeholder='Digite o CPF'
                variant='outlined'
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
              <InputLabel htmlFor='phone'>Telefone*</InputLabel>
              <TextField
                id='phone'
                placeholder='Digite o telefone'
                variant='outlined'
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
            <InputLabel htmlFor='address_1'>Endereço</InputLabel>
            <TextField
              id='address_1'
              placeholder='Digite o endereço'
              variant='outlined'
              {...register('address_1')}
              error={Boolean(errors.address_1)}
              helperText={errors.address_1?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='address_2'>Complemento</InputLabel>
            <TextField
              id='address_2'
              placeholder='Digite o complemento'
              variant='outlined'
              {...register('address_2')}
              error={Boolean(errors.address_2)}
              helperText={errors.address_2?.message}
              fullWidth
            />
          </Grid>
          <Grid container item spacing={3}>
            <Grid item sm={6} xs={12}>
              <InputLabel htmlFor='zip_code'>CEP</InputLabel>
              <TextField
                id='zip_code'
                placeholder='Digite o CEP'
                variant='outlined'
                {...register('zip_code')}
                error={Boolean(errors.zip_code)}
                helperText={errors.zip_code?.message}
                onChange={(e) => handleSearchZipCode(e)}
                fullWidth
                inputProps={{
                  maxLength: 8
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputLabel htmlFor='district'>Bairro</InputLabel>
              <TextField
                id='district'
                placeholder='Digite o bairro'
                variant='outlined'
                {...register('district')}
                error={Boolean(errors.district)}
                helperText={errors.district?.message}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={7.5}>
              <InputLabel htmlFor='city'>Cidade</InputLabel>
              <TextField
                id='city'
                placeholder='Digite a cidade'
                variant='outlined'
                {...register('city')}
                error={Boolean(errors.city)}
                helperText={errors.city?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={4.5}>
              <InputLabel htmlFor='state'>UF</InputLabel>
              <TextField
                id='state'
                placeholder='Digite a UF'
                variant='outlined'
                {...register('state')}
                error={Boolean(errors.state)}
                helperText={errors.state?.message}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container item mt={4} spacing={3}>
            <Grid item xs={6}>
              <CustomButtonSecondary
                valiant='contained'
                color='secondary'
                fullWidth
                onClick={handleCloseAndClearForm}
              >
                Cancelar
              </CustomButtonSecondary>
            </Grid>
            <Grid item xs={6}>
              <CustomButtonPrimary variant='contained' fullWidth type='submit'>
                Aplicar
              </CustomButtonPrimary>
            </Grid>
          </Grid>
        </Grid>
      </CustomModalSignUpClient>
    </CustomBackdrop>
  )
}

export default ModalAddEditClient
