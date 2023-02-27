import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomModalEditUser = styled('form')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 491px;
    min-height: 623px;
    padding: 40px 56px;
    background-color: ${theme.palette.background.paper};
    border-radius: 30px;
    position: relative;
    margin-left: 108px;

    .btn-close {
      width: 18px;
      position: absolute;
      top: 29px;
      right: 31px;
      cursor: pointer;
    }
  `}
`
