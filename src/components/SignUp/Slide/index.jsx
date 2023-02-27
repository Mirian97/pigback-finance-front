import slideActive from '../../../assets/slide-active.svg'
import slideDisabled from '../../../assets/slide-disabled.svg'
import useGlobal from '../../../hooks/useGlobal'
import { CustomSlider } from './style'

function Slide() {
  const { currentStep } = useGlobal()

  return (
    <CustomSlider>
      <img
        className='slide__item'
        src={currentStep === 0 ? slideActive : slideDisabled}
        alt='Ícone indicativo do passo atual no cadastro'
      />
      <img
        className='slide__item'
        src={currentStep === 1 ? slideActive : slideDisabled}
        alt='Ícone indicativo do passo atual no cadastro'
      />
      <img
        className='slide__item'
        src={currentStep === 2 ? slideActive : slideDisabled}
        alt='Ícone indicativo do passo atual no cadastro'
      />
    </CustomSlider>
  )
}

export default Slide
