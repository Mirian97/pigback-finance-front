import { useNavigate } from 'react-router-dom'
import chargesActiveIcon from '../../assets/charges-active-icon.svg'
import chargesDisabledIcon from '../../assets/charges-disabled-icon.svg'
import ClientsActiveIcon from '../../assets/clients-active-icon.svg'
import ClientsDisabledIcon from '../../assets/clients-disabled-icon.svg'
import homeActiveIcon from '../../assets/home-active-icon.svg'
import homeDisabledIcon from '../../assets/home-disabled-icon.svg'
import useGlobal from '../../hooks/useGlobal'
import { CustomNavBar } from './style'

function NavBar({ home, clients, charges }) {
  const { setOpenFilter } = useGlobal()
  const navigate = useNavigate()

  function handleNavigateTo(route) {
    navigate(`/${route}`)
    setOpenFilter(false)
  }

  return (
    <CustomNavBar>
      <div className='nav-bar-content'>
        <div
          className={`nav-bar-item ${home && 'border-right'}`}
          onClick={() => handleNavigateTo('home')}
        >
          <img
            src={home ? homeActiveIcon : homeDisabledIcon}
            alt='Ícone da página Home'
          />
          <h4 className={`${home && 'active'}`}>Home</h4>
        </div>
        <div
          className={`nav-bar-item ${clients && 'border-right'}`}
          onClick={() => handleNavigateTo('clients')}
        >
          <img
            src={clients ? ClientsActiveIcon : ClientsDisabledIcon}
            alt='Ícone da página de Clientes'
          />
          <h4 className={`${clients && 'active'}`}>Clientes</h4>
        </div>
        <div
          className={`nav-bar-item ${charges && 'border-right'}`}
          onClick={() => handleNavigateTo('charges')}
        >
          <img
            src={charges ? chargesActiveIcon : chargesDisabledIcon}
            alt='Ícone da página de Cobranças'
          />
          <h4 className={`${charges && 'active'}`}>Cobranças</h4>
        </div>
      </div>
    </CustomNavBar>
  )
}

export default NavBar
