import { Typography } from '@mui/material'
import closeIcon from '../../../assets/btn-close.svg'
import warningIcon from '../../../assets/warning-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { deleteCharge } from '../../../services/charge'
import { CustomBackdrop } from '../../../styles/backdrop'
import { messageError } from '../../../utils/messages'
import {
  CustomButtonConfirmDelete,
  CustomButtonNotConfirmDelete,
  CustomModalDelete
} from './style.js'

function ModalDeleteCharge() {
  const { openModalDeleteCharge, setOpenModalDeleteCharge, setNotify } = useGlobal()
  const { currentCharge, token, handleDetailClient, handleListCharges, detailClient } =
    useUser()

  async function handleDeleteCharge() {
    try {
      await deleteCharge(token, currentCharge.charge_id)
      notifySucessDeleteCharge()
      detailClient && (await handleDetailClient(detailClient.id))
      await handleListCharges()
    } catch (error) {
      messageError(error.response.data.mensagem)
    } finally {
      handleCloseModalDeleteCharge()
    }
  }

  function handleCloseModalDeleteCharge() {
    setOpenModalDeleteCharge(false)
  }

  function notifySucessDeleteCharge() {
    setNotify({
      open: true,
      color: 'success',
      severity: 'success',
      message: 'Cobrança excluída com sucesso!'
    })
  }

  return (
    <CustomBackdrop open={openModalDeleteCharge}>
      <CustomModalDelete elevation={0}>
        <img
          className='close-icon'
          src={closeIcon}
          alt='Ícone de fechar'
          onClick={handleCloseModalDeleteCharge}
        />
        <img src={warningIcon} alt='Ícone de sucesso' />
        <Typography variant='h3' color='warning.main' mt={1.7} mb={3.3}>
          Tem certeza que deseja excluir esta cobrança?{' '}
        </Typography>
        <div className='btn-actions-delete'>
          <CustomButtonNotConfirmDelete
            variant='outlined'
            color='error'
            onClick={handleCloseModalDeleteCharge}
          >
            Não
          </CustomButtonNotConfirmDelete>
          <CustomButtonConfirmDelete
            variant='outlined'
            color='secondary'
            onClick={handleDeleteCharge}
          >
            Sim
          </CustomButtonConfirmDelete>
        </div>
      </CustomModalDelete>
    </CustomBackdrop>
  )
}

export default ModalDeleteCharge
