import AddSearchClients from '../../components/AddSearchClients'
import Header from '../../components/Header'
import ModalAddEditCharge from '../../components/Modals/ModalAddEditCharge'
import ModalDeleteCharge from '../../components/Modals/ModalDeleteCharge'
import ModalDetailCharge from '../../components/Modals/ModalDetailCharge'
import ModalEditUser from '../../components/Modals/ModalEditUser'
import ModalSuccessEditUser from '../../components/Modals/ModalSuccessEditUser'
import NavBar from '../../components/NavBar'
import TableCharges from '../../components/Tables/TableCharges'
import Toast from '../../components/Toast'
import { CustomContainer } from '../../styles/containers'
import { CustomTypographyNamePage } from '../../styles/typography'
import { CustomContentCharges } from './style'

function Charges() {
  return (
    <CustomContainer disableGutters>
      <NavBar charges />
      <CustomContentCharges disableGutters>
        <ModalDetailCharge />
        <ModalEditUser />
        <ModalSuccessEditUser />
        <ModalAddEditCharge />
        <ModalDeleteCharge />
        <Toast />
        <Header>
          <CustomTypographyNamePage>Cobranças</CustomTypographyNamePage>
        </Header>
        <AddSearchClients title='Cobranças' />
        <div className='table-charges'>
          <TableCharges />
        </div>
      </CustomContentCharges>
    </CustomContainer>
  )
}
export default Charges
