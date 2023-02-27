import styled from '@emotion/styled'
import { Backdrop, css } from '@mui/material'

export const CustomBackdrop = styled(Backdrop)`
  ${({ theme }) => css`
    background: rgba(145, 154, 150, 0.3);
    backdrop-filter: blur(2px);
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    ${theme.breakpoints.down('sm')} {
      padding-top: 0;
    }
  `}
`
