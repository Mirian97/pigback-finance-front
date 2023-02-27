import styled from '@emotion/styled'
import { Button, css, Paper } from '@mui/material'

export const CustomModalDelete = styled(Paper)`
  ${({ theme }) => css`
    width: 600px;
    min-height: 400px;
    border-radius: 30px;
    margin-left: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    position: relative;
    filter: drop-shadow(0px 4px 42px rgba(0, 0, 0, 0.2));

    .close-icon {
      cursor: pointer;
      position: absolute;
      top: 24px;
      right: 24px;
    }

    .btn-actions-delete {
      display: flex;
      gap: 16px;
    }

    ${theme.breakpoints.down('sm')} {
      margin: auto;
    }
  `}
`

export const CustomButtonNotConfirmDelete = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.palette.error.lighter};
    color: ${theme.palette.error.main};
    border: none;
  `}
`

export const CustomButtonConfirmDelete = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.light};
    color: ${theme.palette.secondary.dark};
    border: none;
  `}
`
