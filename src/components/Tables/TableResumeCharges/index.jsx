import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import { CustomButtonLink } from '../../../styles/buttons'
import { chargeClasses2 } from '../../../utils/constants'
import {
  handleFormatNumberOfClientsAndCharges,
  handleFormatToMoney
} from '../../../utils/formatters'
import { CustomTableResumeCharges } from './style'

function TableResumeCharges({ title, type, charges, total }) {
  const { setCharges, setChargeFilterSelected } = useUser()
  const navigate = useNavigate()

  function handleNavigateToChargePage() {
    setCharges(charges)
    type === 'paid'
      ? setChargeFilterSelected({ paid: true, pending: false })
      : setChargeFilterSelected({ paid: false, pending: true })
    navigate('/charges')
  }

  const newTotalCharges = handleFormatNumberOfClientsAndCharges(total)

  return (
    <CustomTableResumeCharges elevation={0}>
      <div className='card-table-title'>
        <Typography variant='h3' color='grey.200' ml={5}>
          {title}
        </Typography>
        <span className={chargeClasses2[type]}>{newTotalCharges}</span>
      </div>
      <table className='table-content'>
        <thead>
          <tr>
            <th className='align-left'>Cliente</th>
            <th>ID da cob.</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {charges?.slice(0, 4).map(({ charge_id, client_name, amount }) => (
            <tr key={charge_id}>
              <td className='align-left'>{client_name}</td>
              <td>{charge_id}</td>
              <td>{handleFormatToMoney(amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='table-link'>
        <CustomButtonLink onClick={handleNavigateToChargePage}>
          Ver todos
        </CustomButtonLink>
      </div>
    </CustomTableResumeCharges>
  )
}
export default TableResumeCharges
