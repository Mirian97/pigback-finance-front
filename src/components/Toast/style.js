import styled from '@emotion/styled'
import { Alert } from '@mui/material'

export const CustomAlert = styled(Alert)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.9rem;
  height: 54px;
  min-width: 400px;
  position: absolute;
  right: 50px;
  bottom: 15px;
  box-shadow: 0px 4px 42px rgba(0, 0, 0, 0.25);

  span {
    margin-right: 35px;
  }
`
