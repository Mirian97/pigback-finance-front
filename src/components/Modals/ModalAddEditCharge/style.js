import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomModalSignUpCharge = styled('form')`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    border-radius: 30px;
    max-width: 600px;
    min-height: 754px;
    position: relative;
    padding: 51px 56px 40px;
    margin-left: 108px;

    .modal-sign-up-charge__title {
      display: flex;
      margin-bottom: 20px;

      .charge-icon {
        width: 32px;
        height: 32px;
      }

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
