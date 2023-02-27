import { Typography } from '@mui/material'
import { useEffect } from 'react'
import sucessIcon from '../../../assets/sucess-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import { CustomBackdrop } from '../../../styles/backdrop'
import { CustomModalSucess } from './style.js'

function ModalSuccessEditUser() {
  const { openModalSuccessEditUser, setOpenModalSuccessEditUser } = useGlobal()

  useEffect(() => {
    if (openModalSuccessEditUser) {
      setTimeout(() => {
        setOpenModalSuccessEditUser(false)
      }, 2000)
    }
  }, [openModalSuccessEditUser, setOpenModalSuccessEditUser])

  return (
    <CustomBackdrop open={openModalSuccessEditUser}>
      <CustomModalSucess elevation={0}>
        <img src={sucessIcon} alt='Ícone de sucesso' />
        <Typography variant='h2' color='grey.100' mt={3}>
          Cadastro Alterado com sucesso!
        </Typography>
      </CustomModalSucess>
    </CustomBackdrop>
  )
}

export default ModalSuccessEditUser
