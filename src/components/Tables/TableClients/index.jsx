import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import chargeIcon from '../../../assets/charge-page-clients-icon.svg'
import filterIcon from '../../../assets/filter-title-clients-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { CustomAlignIconNameOfTable } from '../../../styles/aligners'
import { CustomTypographyEllipsis } from '../../../styles/typography'
import { handleSearch } from '../../../utils/functions'
import { handleOrderByName } from '../../../utils/sort'
import NotFound from '../../NotFound'
import { CustomTableClients, CustomTypographyTableClients } from './style'

function TableClients() {
  const navigate = useNavigate()
  const [orderByName, setOrderByName] = useState(false)
  const { setOpenModalAddEditCharge } = useGlobal()
  const { clients, setClients, setCurrentClient, handleDetailClient, searchClient } =
    useUser()

  async function handleNavigateToDetailClient(id) {
    await handleDetailClient(id)
    navigate('/client')
  }

  function handleOpenModalSignUpCharge(e, id, name) {
    e.stopPropagation()
    setCurrentClient({ id, name })
    setOpenModalAddEditCharge(true)
  }

  const allClients = handleSearch(searchClient, clients)

  return (
    <CustomTableClients elevation={0}>
      {allClients.length ? (
        <table>
          <thead className='container-title-table'>
            <tr>
              <th className='title-clients-filter-img'>
                <CustomAlignIconNameOfTable>
                  <img
                    src={filterIcon}
                    alt='Ícone de filtro'
                    onClick={() =>
                      handleOrderByName(clients, setClients, orderByName, setOrderByName)
                    }
                  />
                  Cliente
                </CustomAlignIconNameOfTable>
              </th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Status</th>
              <th>Criar Cobrança</th>
            </tr>
          </thead>
          <tbody>
            {allClients.map(
              ({
                client_id,
                client_name,
                client_email,
                client_cpf,
                client_phone,
                client_status
              }) => (
                <tr
                  key={client_id}
                  onClick={() => handleNavigateToDetailClient(client_id)}
                >
                  <td className='client-name'>
                    <CustomTypographyEllipsis>{client_name}</CustomTypographyEllipsis>
                  </td>
                  <td>{client_cpf}</td>
                  <td>
                    <CustomTypographyEllipsis>{client_email}</CustomTypographyEllipsis>
                  </td>
                  <td>{client_phone}</td>
                  <td>
                    <div className='client-status'>
                      <span
                        className={client_status ? 'status-up-to-date' : 'status-overdue'}
                      >
                        {client_status ? 'Em dia' : 'Inadimplente'}
                      </span>
                    </div>
                  </td>
                  <td
                    className='link-charge'
                    onClick={(e) =>
                      handleOpenModalSignUpCharge(e, client_id, client_name)
                    }
                  >
                    <img src={chargeIcon} alt='Ícone de cobrança' />
                    <CustomTypographyTableClients color='primary'>
                      Cobrança
                    </CustomTypographyTableClients>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <NotFound />
      )}
    </CustomTableClients>
  )
}
export default TableClients
