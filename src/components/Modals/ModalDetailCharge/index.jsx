import { Grid, Typography } from '@mui/material'
import closeIcon from '../../../assets/btn-close.svg'
import chargeIcon from '../../../assets/charges-disabled-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { CustomBackdrop } from '../../../styles/backdrop'
import { chargeClasses1 } from '../../../utils/constants'
import { handleFormatToMoney } from '../../../utils/formatters'
import { CustomModalCharge } from './style.js'

function ModalDetailCharge() {
  const { openModalCharge, setOpenModalCharge } = useGlobal()
  const { currentCharge } = useUser()

  function handleCloseModalCharge() {
    setOpenModalCharge(false)
  }

  return (
    <CustomBackdrop open={openModalCharge}>
      <CustomModalCharge elevation={0}>
        <div className='modal-charge__title'>
          <img src={chargeIcon} alt='Ícone de cobrança' />
          <Typography variant='h1'>Detalhes da Cobrança</Typography>
          <img
            className='button-close-modal'
            src={closeIcon}
            alt='Ícone de fechar'
            onClick={handleCloseModalCharge}
          />
        </div>
        <div className='modal-charge__content'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='subtitle1' color='grey.200'>
                Nome
              </Typography>
              <Typography variant='body1' color='grey.200'>
                {currentCharge?.client_name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle1' color='grey.200'>
                Descrição
              </Typography>
              <Typography variant='body1' color='black'>
                {currentCharge?.description}
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={6}>
                <Typography variant='subtitle1' color='grey.200'>
                  Vencimento
                </Typography>
                <Typography variant='body1' color='grey.200'>
                  {currentCharge?.due_date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1' color='grey.200'>
                  Valor
                </Typography>
                <Typography variant='body1' color='grey.200'>
                  {handleFormatToMoney(currentCharge?.amount)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={6}>
                <Typography variant='subtitle1' color='grey.200'>
                  ID cobranças
                </Typography>
                <Typography variant='body1' color='grey.200'>
                  {currentCharge?.charge_id}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1' color='grey.200'>
                  Status
                </Typography>
                <span className={chargeClasses1[currentCharge?.status]}>
                  {currentCharge?.status}
                </span>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CustomModalCharge>
    </CustomBackdrop>
  )
}
export default ModalDetailCharge
