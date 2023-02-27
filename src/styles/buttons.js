import styled from '@emotion/styled'
import { Button, css } from '@mui/material'

export const CustomButtonPrimary = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.palette.primary};
    min-width: 160px;
  `}
`

export const CustomButtonSecondary = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.palette.secondary};
    background-color: ${theme.palette.grey[800]};
    border: 1px solid ${theme.palette.grey[600]};
    min-width: 160px;
  `}
`

export const CustomButtonLink = styled(Button)`
  ${({ theme }) => css`
    font-family: 'Nunito';
    font-weight: 600;
    line-height: 130%;
    text-decoration-line: underline;
    color: ${theme.palette.primary.main};

    a {
      color: ${theme.palette.primary.main};
    }
  `}
`
