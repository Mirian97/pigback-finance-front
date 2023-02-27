import AddSearchClients from '../../components/AddSearchClients'
import Header from '../../components/Header'
import ModalSignUpEditCharge from '../../components/Modals/ModalAddEditCharge'
import ModalSignUpEditClient from '../../components/Modals/ModalAddEditClient'
import ModalEditUser from '../../components/Modals/ModalEditUser'
import ModalSuccessEditUser from '../../components/Modals/ModalSuccessEditUser'
import NavBar from '../../components/NavBar'
import TableClients from '../../components/Tables/TableClients'
import Toast from '../../components/Toast'
import { CustomContainer } from '../../styles/containers'
import { CustomTypographyNamePage } from '../../styles/typography'
import { CustomContentClients } from './style'

function Clients() {
  return (
    <CustomContainer disableGutters>
      <NavBar clients />
      <CustomContentClients disableGutters>
        <Header>
          <CustomTypographyNamePage>Clientes</CustomTypographyNamePage>
        </Header>
        <ModalEditUser />
        <ModalSuccessEditUser />
        <ModalSignUpEditClient />
        <ModalSignUpEditCharge />
        <Toast />
        <AddSearchClients title='Clientes ' clients />
        <div className='table-clients'>
          <TableClients />
        </div>
      </CustomContentClients>
    </CustomContainer>
  )
}
export default Clients
