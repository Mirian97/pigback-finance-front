import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormSignUp } from '../../components/SignUp/FormSignUp'
import ModalSuccessSignUp from '../../components/SignUp/ModalSuccessSignUp'
import Slide from '../../components/SignUp/Slide'
import Stepper from '../../components/SignUp/Stepper'
import useUser from '../../hooks/useUser'
import { ContainerSignUp } from './style'

function SignUp() {
  const { token } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    token && navigate('/home')
  }, [token, navigate])

  return (
    <ContainerSignUp>
      <div className='left'>
        <Stepper />
      </div>
      <div className='right'>
        <FormSignUp />
        <ModalSuccessSignUp />
        <Slide />
      </div>
    </ContainerSignUp>
  )
}

export default SignUp
