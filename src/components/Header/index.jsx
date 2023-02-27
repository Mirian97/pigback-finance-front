import { useState } from 'react'
import ArrowIcon from '../../assets/arrow-profile.svg'
import PopUpEditLogOut from '../../components/PopUpEditLogOut'
import useUser from '../../hooks/useUser'
import { handleFormatUserName } from '../../utils/formatters'
import { CustomHeader } from './style'

function Header({ children }) {
  const [openPopUpEditLogOut, setOpenPopUpEditLogOut] = useState(false)
  const { user } = useUser()

  return (
    <CustomHeader>
      <div className='header-content'>
        <div className='title'>{children}</div>
        <div className='user'>
          <div className='user-img'>
            <span>{handleFormatUserName(user.name)}</span>
          </div>
          <div className='user-name'>
            <h3>{user.name}</h3>
            <img
              src={ArrowIcon}
              alt='Abrir edição e lougout do usuário'
              onClick={() => setOpenPopUpEditLogOut(!openPopUpEditLogOut)}
            />
            <PopUpEditLogOut
              openPopUpEditLogOut={openPopUpEditLogOut}
              setOpenPopUpEditLogOut={setOpenPopUpEditLogOut}
            />
          </div>
        </div>
      </div>
    </CustomHeader>
  )
}
export default Header
