import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomModalSignUpClient = styled('form')`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    border-radius: 30px;
    max-width: 600px;
    min-height: 758px;
    position: relative;
    padding: 40px 56px;
    margin-left: 108px;

    .modal-client-sign-up__title {
      display: flex;
      margin-bottom: 16px;

      .close-icon {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
      }
    }

    ${theme.breakpoints.down('sm')} {
      margin: auto;
    }
  `}
`
