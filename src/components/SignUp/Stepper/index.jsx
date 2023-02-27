import { Typography } from '@mui/material'
import finalStepIcon from '../../../assets/final-step-icon.svg'
import firstStepIcon from '../../../assets/first-step-icon.svg'
import secondStepIcon from '../../../assets/second-step-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import { CustomStepper } from './style'

function Stepper() {
  const { currentStep } = useGlobal()

  const stepper = [
    { title: 'Cadastre-se', description: 'Por favor, escreva seu nome e e-mail' },
    { title: 'Escolha uma senha', description: 'Escolha uma senha segura' },
    {
      title: 'Cadastro realizado com sucesso',
      description: 'E-mail e senha cadastrados com sucesso'
    }
  ]

  function handleStepperImage() {
    if (currentStep === 0) return firstStepIcon
    if (currentStep === 1) return secondStepIcon
    if (currentStep === 2) return finalStepIcon
  }

  return (
    <CustomStepper>
      <img src={handleStepperImage()} alt='Passos do cadastro de usuário' />
      <div className='stepper__content'>
        {stepper.map(({ title, description }, index) => (
          <div key={index} className='stepper__item'>
            <Typography variant='h3' color='secondary'>
              {title}
            </Typography>
            <Typography variant='subtitle2' color='grey.200'>
              {description}
            </Typography>
          </div>
        ))}
      </div>
    </CustomStepper>
  )
}

export default Stepper
