import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomModalSignUp = styled('div')`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    ${theme.breakpoints.down('md')} {
      margin: 0 40px;
    }

    .modal-sign-up {
      background-color: ${theme.palette.grey[700]};
      border-radius: 30px;
      width: 550px;
      height: 420px;
      padding: 180px 75px 173px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      ${theme.breakpoints.down('md')} {
        width: 100%;
        height: 300px;
      }
    }

    img {
      width: 104px;
      height: 104px;
    }
  `}
`
