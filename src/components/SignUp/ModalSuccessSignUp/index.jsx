import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import sucessIcon from '../../../assets/sucess-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import { CustomButtonPrimary } from '../../../styles/buttons'
import { CustomModalSignUp } from './style'

function ModalSuccessSignUp() {
  const { openModalSuccessAddUser, setOpenModalSuccessAddUser, setCurrentStep } =
    useGlobal()
  const navigate = useNavigate()

  function handleNavigateToLogin() {
    setOpenModalSuccessAddUser(false)
    setCurrentStep(0)
    navigate('/')
  }

  return (
    <>
      {openModalSuccessAddUser && (
        <CustomModalSignUp>
          <div className='modal-sign-up'>
            <Typography variant='h2' color='grey100' align='center'>
              Cadastro realizado com sucesso!
            </Typography>
            <img src={sucessIcon} alt='Ícone de sucesso' />
          </div>
          <CustomButtonPrimary variant='contained' onClick={handleNavigateToLogin}>
            Ir para Login
          </CustomButtonPrimary>
        </CustomModalSignUp>
      )}
    </>
  )
}

export default ModalSuccessSignUp
