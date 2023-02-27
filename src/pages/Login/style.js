import styled from '@emotion/styled'
import { Box, css } from '@mui/material'
import backgroundLogin from '../../assets/img-login-page.svg'

export const ContainerLogin = styled('div')`
  ${({ theme }) => css`
    background-color: ${theme.palette.grey[800]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100vw;
    overflow: hidden;

    .login-left {
      width: 37%;
      height: 100vh;
      display: flex;
      justify-content: center;
      padding: 136px 20px 0;
      align-items: flex-strech;
      background-image: url(${backgroundLogin});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      ${theme.breakpoints.down('sm')} {
        display: none;
      }
    }

    .container-login {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: calc(100vw - 400px);
      height: 100vh;

      ${theme.breakpoints.down('sm')} {
        width: 100%;
      }
    }

    .container-sign-up {
      font-size: 1.4rem;
      display: flex;
      align-items: center;

      span {
        font-family: 'Nunito';
        font-weight: 400;
        line-height: 1.3;
      }

      a {
        font-size: 1.4rem;
      }
    }
  `}
`

export const CustomFormLogin = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    width: 344px;

    ${theme.breakpoints.down('sm')} {
      width: 100%;
      padding: 0 40px;
    }
  `}
`

export const CustomContainerPassword = styled('div')`
  position: relative;

  .forgot-password {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 1.4rem;
    }
  }
`
