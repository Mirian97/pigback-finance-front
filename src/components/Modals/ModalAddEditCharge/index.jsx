import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, InputLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import closeIcon from '../../../assets/btn-close.svg'
import chargeIcon from '../../../assets/charges-disabled-icon.svg'
import radioDiselectedIcon from '../../../assets/radio-diselected.svg'
import radioSelectedIcon from '../../../assets/radio-selected.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { registerCharge, updateCharge } from '../../../services/charge'
import { CustomBackdrop } from '../../../styles/backdrop'
import { CustomButtonPrimary, CustomButtonSecondary } from '../../../styles/buttons'
import { CustomFormControlLabel } from '../../../styles/form'
import { handleSetStatus } from '../../../utils/functions'
import { messageError } from '../../../utils/messages'
import { signUpChargeSchema } from '../../../validations/chargeSchema'
import { CustomModalSignUpCharge } from './style.js'

function ModalAddEditCharge() {
  const { notify, setNotify, openModalAddEditCharge, setOpenModalAddEditCharge } =
    useGlobal()
  const {
    token,
    currentClient,
    currentCharge,
    detailClient,
    handleListCharges,
    handleDetailClient
  } = useUser()

  const {
    reset,
    getValues,
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpChargeSchema)
  })

  async function onSubmit() {
    const submitValues = getValues()
    if (currentCharge) {
      await handleEditCharge(submitValues)
    } else {
      await handleRegisterCharge(submitValues)
    }
    detailClient && (await handleDetailClient(detailClient.id))
    await handleListCharges()
    handleCloseAndClearForm()
  }

  async function handleEditCharge(values) {
    const { client_id, client_name, ...restValues } = values
    try {
      await updateCharge(token, currentCharge.charge_id, restValues)
      notifySucessEditCharge()
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  async function handleRegisterCharge(values) {
    values.client_id = currentClient.id
    try {
      await registerCharge(token, values)
      notifySucessRegisterCharge()
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  function notifySucessRegisterCharge() {
    setNotify({ ...notify, open: true, message: 'Cobrança cadastrada com sucesso!' })
  }

  function notifySucessEditCharge() {
    setNotify({ ...notify, open: true, message: 'Cobrança editada com sucesso!' })
  }

  function handleCloseAndClearForm() {
    setOpenModalAddEditCharge(false)
    reset()
  }

  useEffect(() => {
    if (currentCharge) {
      const { charge_id, status, ...restCurrentCharge } = currentCharge
      return reset({ ...restCurrentCharge, status: handleSetStatus(status) })
    }
    if (currentClient) {
      reset({
        client_name: currentClient.name,
        description: '',
        amount: '',
        due_date: '',
        status: true
      })
    }
  }, [currentCharge, currentClient])

  return (
    <CustomBackdrop open={openModalAddEditCharge}>
      <CustomModalSignUpCharge onSubmit={handleSubmit(onSubmit)} disableGutters>
        <div className='modal-sign-up-charge__title'>
          <img className='charge-icon' src={chargeIcon} alt='Ícone de cobranças' />
          <Typography variant='h1' align='left' ml={2}>
            {currentCharge ? 'Edição de Cobrança' : 'Cadastro de Cobrança'}
          </Typography>
          <img
            className='close-icon'
            src={closeIcon}
            alt='Ícone de fechar'
            onClick={handleCloseAndClearForm}
          />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel htmlFor='client_name'>Nome*</InputLabel>
            <TextField
              id='client_name'
              placeholder='Digite o nome'
              variant='outlined'
              {...register('client_name')}
              error={Boolean(errors.client_name)}
              helperText={errors.client_name?.message}
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='description'>Descrição*</InputLabel>
            <TextField
              id='description'
              placeholder='Digite a descrição'
              variant='outlined'
              rows={3}
              multiline
              {...register('description')}
              error={Boolean(errors.description)}
              helperText={errors.description?.message}
              fullWidth
            />
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor='due_date'>Vencimento*</InputLabel>
              <TextField
                id='due_date'
                placeholder='Data de Vencimento'
                type='date'
                variant='outlined'
                {...register('due_date')}
                error={Boolean(errors.due_date)}
                helperText={errors.due_date?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor='amount'>Valor*</InputLabel>
              <TextField
                id='amount'
                placeholder='Digite o valor'
                variant='outlined'
                type='number'
                {...register('amount')}
                error={Boolean(errors.amount)}
                helperText={errors.amount?.message}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} mb={4}>
            <InputLabel htmlFor='status'>Status*</InputLabel>
            <Controller
              id='status'
              name='status'
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <Grid container spacing={1} mt={1}>
                    <Grid item xs={12}>
                      <CustomFormControlLabel
                        value={true}
                        control={
                          <Radio
                            color='secondary'
                            icon={
                              <img
                                src={radioDiselectedIcon}
                                alt='Opção não selecionada'
                              />
                            }
                            checkedIcon={
                              <img src={radioSelectedIcon} alt='Opção selecionada' />
                            }
                          />
                        }
                        label='Cobrança Paga'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomFormControlLabel
                        value={false}
                        control={
                          <Radio
                            color='secondary'
                            icon={
                              <img
                                src={radioDiselectedIcon}
                                alt='Opção não selecionada'
                              />
                            }
                            checkedIcon={
                              <img src={radioSelectedIcon} alt='Opção selecionada' />
                            }
                          />
                        }
                        label='Cobrança Pendente'
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              )}
            />
          </Grid>
          <Grid container item mt={4} spacing={3}>
            <Grid item xs={12} sm={6}>
              <CustomButtonSecondary
                valiant='contained'
                color='secondary'
                fullWidth
                onClick={handleCloseAndClearForm}
              >
                Cancelar
              </CustomButtonSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomButtonPrimary
                variant='contained'
                fullWidth
                type='submit'
                onClick={onSubmit}
              >
                Aplicar
              </CustomButtonPrimary>
            </Grid>
          </Grid>
        </Grid>
      </CustomModalSignUpCharge>
    </CustomBackdrop>
  )
}

export default ModalAddEditCharge
