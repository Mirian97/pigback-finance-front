import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomContentCharges = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px 32px;

    .table-charges {
      padding: 0 50px;
    }
  `}
`
