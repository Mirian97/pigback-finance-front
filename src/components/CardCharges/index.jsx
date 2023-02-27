import { Typography } from '@mui/material'
import { chargeClasses2 } from '../../utils/constants'
import { handleFormatToMoney } from '../../utils/formatters'
import { CustomCardCharge } from './style'

function CardCharges({ title, totalCharges, type, image }) {
  return (
    <CustomCardCharge elevation={0} className={chargeClasses2[type]}>
      <img src={image} alt='Ícone de cobranças' />
      <div className='card-title'>
        <Typography variant='h3' color='grey.200'>
          {title}
        </Typography>
        <Typography variant='h2' color='grey.200'>
          {handleFormatToMoney(totalCharges)}
        </Typography>
      </div>
    </CustomCardCharge>
  )
}
export default CardCharges
