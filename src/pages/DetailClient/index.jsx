import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import clientIcon from '../../assets/clients-disabled-icon.svg'
import deleteIcon from '../../assets/delete-icon.svg'
import editIconGren from '../../assets/edit-icon-green.svg'
import editIcon from '../../assets/edit-icon.svg'
import filterIcon from '../../assets/filter-title-clients-icon.svg'
import plusIcon from '../../assets/plus-icon.svg'
import Header from '../../components/Header'
import ModalAddEditCharge from '../../components/Modals/ModalAddEditCharge'
import ModalAddEditClient from '../../components/Modals/ModalAddEditClient'
import ModalDeleteCharge from '../../components/Modals/ModalDeleteCharge'
import ModalDetailCharge from '../../components/Modals/ModalDetailCharge'
import ModalEditUser from '../../components/Modals/ModalEditUser'
import ModalSuccessEditUser from '../../components/Modals/ModalSuccessEditUser'
import NavBar from '../../components/NavBar'
import Toast from '../../components/Toast'
import useGlobal from '../../hooks/useGlobal'
import useUser from '../../hooks/useUser'
import { CustomAlignIconNameOfTable } from '../../styles/aligners'
import { CustomButtonPrimary, CustomButtonSecondary } from '../../styles/buttons'
import { CustomContainer } from '../../styles/containers'
import {
  CustomEditDeleteOption,
  CustomTypographyEllipsis,
  CustomTypographyNamePage
} from '../../styles/typography'
import { chargeClasses1 } from '../../utils/constants'
import { handleFormatToMoney } from '../../utils/formatters'
import { handleOrderById } from '../../utils/sort'
import {
  CustomCardChargesClient,
  CustomCardDataClient,
  CustomContentDetailClient
} from './style'

function DetailClient() {
  const [orderById, setOrderById] = useState(false)
  const {
    setOpenModalAddEditClient,
    setOpenModalAddEditCharge,
    setOpenModalDeleteCharge,
    setOpenModalCharge
  } = useGlobal()
  const {
    detailClient,
    detailChargesClient,
    setDetailChargesClient,
    setCurrentClient,
    setCurrentCharge,
    handleDetailClient
  } = useUser()

  const {
    id,
    name,
    email,
    cpf,
    phone,
    zip_code,
    address_1,
    address_2,
    district,
    city,
    state
  } = detailClient

  function handleOpenModalRegisterCharge() {
    setCurrentClient({ id, name })
    setOpenModalAddEditCharge(true)
  }

  function handleOpenModalEditCharge(charge, e) {
    e.stopPropagation()
    setCurrentCharge(charge)
    setOpenModalAddEditCharge(true)
  }

  function handleOpenModalDeleteCharge(charge, e) {
    e.stopPropagation()
    setCurrentCharge(charge)
    setOpenModalDeleteCharge(true)
  }

  function handleOpenModalCharge(charge) {
    setCurrentCharge(charge)
    setOpenModalCharge(true)
  }

  useEffect(() => {
    handleDetailClient(detailClient.id)
  }, [])

  function renderCardDataClient() {
    return (
      <CustomCardDataClient elevation={0}>
        <div className='data-client__title'>
          <Typography variant='h3' color='grey.200'>
            Dados do cliente
          </Typography>
          <CustomButtonSecondary
            valiant='contained'
            color='secondary'
            onClick={() => setOpenModalAddEditClient(true)}
          >
            <img src={editIconGren} alt='Ícone de editar cliente' />
            Editar cliente
          </CustomButtonSecondary>
        </div>
        <table>
          <thead className='table-header'>
            <tr>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            <tr>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{cpf}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead className='table-header'>
            <tr>
              <th>Endereço</th>
              <th>Bairro</th>
              <th>Complemento</th>
              <th>CEP</th>
              <th>Cidade</th>
              <th>UF</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            <tr className='td-bold'>
              <td>{address_1}</td>
              <td>{district}</td>
              <td>{address_2}</td>
              <td>{zip_code}</td>
              <td>{city}</td>
              <td>{state}</td>
            </tr>
          </tbody>
        </table>
      </CustomCardDataClient>
    )
  }

  function renderCardChargesClient() {
    return (
      <CustomCardChargesClient elevation={0}>
        <div className='charges-client__title'>
          <Typography variant='h3' color='grey.200'>
            Cobranças do Cliente
          </Typography>
          <CustomButtonPrimary
            variant='contained'
            onClick={handleOpenModalRegisterCharge}
          >
            <img src={plusIcon} alt='icone de adicionar cobrança' />
            Nova cobrança
          </CustomButtonPrimary>
        </div>
        <table>
          <thead className='table-header'>
            <tr>
              <th>
                <CustomAlignIconNameOfTable>
                  <img
                    src={filterIcon}
                    alt='Ícone de ordenação'
                    onClick={() =>
                      handleOrderById(
                        detailChargesClient,
                        setDetailChargesClient,
                        orderById,
                        setOrderById
                      )
                    }
                  />
                  ID da Cob.
                </CustomAlignIconNameOfTable>
              </th>
              <th>Data de Venc.</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Descrição</th>
              <th />
            </tr>
          </thead>
          <tbody className='table-body'>
            {detailChargesClient.map((charge) => (
              <tr onClick={() => handleOpenModalCharge(charge)} key={charge.charge_id}>
                <td>{charge.charge_id}</td>
                <td>{charge.due_date}</td>
                <td>{handleFormatToMoney(charge.amount)}</td>
                <td>
                  <span className={chargeClasses1[charge.status]}>{charge.status}</span>
                </td>
                <td>
                  <CustomTypographyEllipsis>
                    {charge.description}
                  </CustomTypographyEllipsis>
                </td>
                <td className='options-charges'>
                  <div className='edit-delete'>
                    <div onClick={(e) => handleOpenModalEditCharge(charge, e)}>
                      <img src={editIcon} alt='Ícone de edição de cobrança' />
                      <CustomEditDeleteOption color='grey.300'>
                        Editar
                      </CustomEditDeleteOption>
                    </div>
                    <div onClick={(e) => handleOpenModalDeleteCharge(charge, e)}>
                      <img src={deleteIcon} alt='Ícone de deletar cobrança' />
                      <CustomEditDeleteOption color='error'>
                        Exluir
                      </CustomEditDeleteOption>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CustomCardChargesClient>
    )
  }

  return (
    <CustomContainer disableGutters>
      <NavBar clients />
      <CustomContentDetailClient disableGutters>
        <Header>
          <div className='detail-client__header'>
            <CustomTypographyNamePage>Clientes</CustomTypographyNamePage>
            <Typography color='grey.300'>{'>'}</Typography>
            <Typography color='grey.300'>Detalhes do cliente</Typography>
          </div>
        </Header>
        <ModalAddEditClient edit />
        <ModalEditUser />
        <ModalSuccessEditUser />
        <ModalAddEditCharge />
        <ModalDeleteCharge />
        <ModalDetailCharge />
        <Toast />
        <div className='detail-client'>
          <div className='client-name'>
            <img src={clientIcon} alt='Ícone de clientes' />
            <Typography variant='h1' color='grey.200'>
              {name}
            </Typography>
          </div>
          {renderCardDataClient()}
          {renderCardChargesClient()}
        </div>
      </CustomContentDetailClient>
    </CustomContainer>
  )
}

export default DetailClient
