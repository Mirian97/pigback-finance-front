import notFoundImage from '../../assets/not-found.svg'
import { CustomNotFound } from './style'

function NotFound() {
  return (
    <CustomNotFound>
      <img
        className='not-found-image'
        src={notFoundImage}
        alt='Nenhum resultado foi encontrado'
      />
    </CustomNotFound>
  )
}

export default NotFound
