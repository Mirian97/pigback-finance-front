import styled from '@emotion/styled'
import { css } from '@mui/material'

export const ContainerSignUp = styled('div')`
  ${({ theme }) => css`
    background-color: ${theme.palette.grey[700]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;

    .left {
      display: flex;
      justify-content: center;
      padding-top: 180px;
      height: 100vh;
      width: 37%;

      ${theme.breakpoints.up('lg')} {
        padding-top: 250px;
      }

      ${theme.breakpoints.down('md')} {
        width: 50%;
      }

      ${theme.breakpoints.down('sm')} {
        display: none;
      }
    }

    .right {
      background: ${theme.palette.grey[800]};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      positon: relative;
      width: 63%;

      ${theme.breakpoints.down('md')} {
        width: 50%;
      }

      ${theme.breakpoints.down('sm')} {
        width: 100%;
      }
    }
  `}
`
