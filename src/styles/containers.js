import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomContainer = styled(Container)`
  ${({ theme }) => css`
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    background-color: ${theme.palette.grey[800]};
  `}
`
