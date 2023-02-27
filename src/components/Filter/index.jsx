import { Checkbox, FormGroup, FormLabel, Grid } from '@mui/material'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import radioDiselectedIcon from '../../assets/filter-radio-diselected.svg'
import radioSelectedIcon from '../../assets/filter-radio-selected.svg'
import useGlobal from '../../hooks/useGlobal'
import useUser from '../../hooks/useUser'
import { CustomButtonPrimary, CustomButtonSecondary } from '../../styles/buttons'
import { CustomFormControlLabel } from '../../styles/form'
import { verifyFalsyProperties } from '../../utils/functions'
import { CustomFilter } from './style'

function FilterClientsCharges({ clients }) {
  const { openFilter, setOpenFilter } = useGlobal()
  const { control, reset, handleSubmit } = useForm()
  const {
    overdueCharges,
    pendingCharges,
    paidCharges,
    defaulterClients,
    upToDateClients,
    setClients,
    setCharges,
    handleListClients,
    handleListCharges,
    clientFilterSelected,
    setClientFilterSelected,
    chargeFilterSelected,
    setChargeFilterSelected
  } = useUser()

  function onSubmit(data) {
    const noneSelectedFilter = verifyFalsyProperties(data)
    if (noneSelectedFilter) {
      handleClearFilter()
      return
    }
    if (clients) {
      const filteredClients = []
      const { defaulter, upToDate } = data
      upToDate && filteredClients.push(...defaulterClients.clients)
      defaulter && filteredClients.push(...upToDateClients.clients)
      setClientFilterSelected(data)
      setClients(filteredClients)
    } else {
      const filteredCharges = []
      const { paid, pending } = data
      pending &&
        filteredCharges.push(...overdueCharges.charges, ...pendingCharges.charges)
      paid && filteredCharges.push(...paidCharges.charges)
      setChargeFilterSelected(data)
      setCharges(filteredCharges)
    }
    setOpenFilter(false)
  }

  function handleClearFilter() {
    if (clients) {
      handleListClients()
      setClientFilterSelected({})
    } else {
      handleListCharges()
      setChargeFilterSelected({})
    }
    setOpenFilter(false)
  }

  useEffect(() => {
    if (clients) {
      reset(clientFilterSelected)
    } else {
      reset(chargeFilterSelected)
    }
  }, [clientFilterSelected, chargeFilterSelected])

  return (
    <>
      {openFilter && (
        <CustomFilter>
          <div className='arrow-up' />
          <form className='filter-form' onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor='status'>Status*</FormLabel>
            <FormGroup id='status'>
              <Grid container spacing={1} mb={3}>
                <Grid item xs={12}>
                  <Controller
                    name={clients ? 'upToDate' : 'pending'}
                    control={control}
                    defaultValue={false}
                    render={({ field: { value, onChange } }) => (
                      <CustomFormControlLabel
                        control={
                          <Checkbox
                            checked={value}
                            onChange={(e) => onChange(e.target.checked)}
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
                        label={clients ? 'Inadimplentes' : 'Pendentes'}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name={clients ? 'defaulter' : 'paid'}
                    control={control}
                    defaultValue={false}
                    render={({ field: { value, onChange } }) => (
                      <CustomFormControlLabel
                        control={
                          <Checkbox
                            checked={value}
                            onChange={(e) => onChange(e.target.checked)}
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
                        label={clients ? 'Em dia' : 'Pagas'}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </FormGroup>
            <CustomButtonPrimary type='submit' variant='contained'>
              Aplicar
            </CustomButtonPrimary>
            <CustomButtonSecondary color='secondary' onClick={handleClearFilter}>
              Limpar
            </CustomButtonSecondary>
          </form>
        </CustomFilter>
      )}
    </>
  )
}

export default FilterClientsCharges
