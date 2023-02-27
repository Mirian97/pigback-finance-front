import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const CustomModalCharge = styled(Paper)`
  width: 600px;
  min-height: 350px;
  border-radius: 30px;
  margin-left: 108px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  padding: 40px 56px;
  position: relative;
  filter: drop-shadow(0px 4px 42px rgba(0, 0, 0, 0.2));

  .modal-charge__title {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;

    .button-close-modal {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;
    }
  }

  .modal-charge__content {
    span {
      font-family: 'Nunito';
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.9rem;
      border-radius: 8px;
      padding: 0px 10px;
      width: 100px;
    }
  }
`
