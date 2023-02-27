import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import overdueIcon from '../../../assets/overdue-icon.svg'
import paidIcon from '../../../assets/paid-icon.svg'
import useUser from '../../../hooks/useUser'
import { CustomButtonLink } from '../../../styles/buttons'
import { chargeClasses2 } from '../../../utils/constants'
import { handleFormatNumberOfClientsAndCharges } from '../../../utils/formatters'
import { CustomTableResumeClients } from './style'

function TableResumeClients({ title, type, clients, total }) {
  const { setClients, setClientFilterSelected } = useUser()
  const navigate = useNavigate()

  function handleNavigateToClientPage() {
    setClients(clients)
    type === 'paid'
      ? setClientFilterSelected({ defaulter: true, upToDate: false })
      : setClientFilterSelected({ defaulter: false, upToDate: true })
    navigate('/clients')
  }

  const newTotalClients = handleFormatNumberOfClientsAndCharges(total)

  return (
    <CustomTableResumeClients>
      <div className='card-table-title'>
        <div className='wrapper-icon-title'>
          <img src={type === 'paid' ? paidIcon : overdueIcon} alt='icone de cobrança' />
          <Typography variant='h3' color='grey.200' ml={1}>
            {title}
          </Typography>
        </div>
        <span className={chargeClasses2[type]}>{newTotalClients}</span>
      </div>
      <table className='table-content'>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>ID do Clie.</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {clients?.slice(0, 4).map(({ client_name, client_id, client_cpf }) => (
            <tr key={client_id}>
              <td className='align-left'>{client_name}</td>
              <td>{client_id}</td>
              <td>{client_cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='table-link'>
        <CustomButtonLink onClick={handleNavigateToClientPage}>
          Ver todos
        </CustomButtonLink>
      </div>
    </CustomTableResumeClients>
  )
}

export default TableResumeClients
