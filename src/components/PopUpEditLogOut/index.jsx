import { useNavigate } from 'react-router-dom'
import editIcon from '../../assets/edit-icon.svg'
import logOutIcon from '../../assets/log-out-icon.svg'
import useGlobal from '../../hooks/useGlobal'
import useUser from '../../hooks/useUser'
import { CustomPopUp } from './style.js'

function PopUpEditLogOut({ openPopUpEditLogOut, setOpenPopUpEditLogOut }) {
  const navigate = useNavigate()
  const { setOpenModalEditUser } = useGlobal()
  const {
    removeToken,
    removeUser,
    removeCurrentClient,
    removeCurrentCharge,
    removeDetailClient,
    removeDetailChargesClient
  } = useUser()

  function handleLogOut() {
    removeToken()
    removeUser()
    removeCurrentClient()
    removeCurrentCharge()
    removeDetailClient()
    removeDetailChargesClient()
    navigate('/')
  }

  function handleOpenEditUser() {
    setOpenModalEditUser(true)
    setOpenPopUpEditLogOut(false)
  }

  return (
    <>
      {openPopUpEditLogOut && (
        <CustomPopUp elevation={0}>
          <div className='pop-up__column' onClick={handleOpenEditUser}>
            <img className='edit-icon' src={editIcon} alt='Ícone de editar' />
            <span>Editar</span>
          </div>
          <div className='pop-up__column' onClick={handleLogOut}>
            <img className='log-out-icon' src={logOutIcon} alt='Ícone de editar' />
            <span>Sair</span>
          </div>
        </CustomPopUp>
      )}
    </>
  )
}

export default PopUpEditLogOut
