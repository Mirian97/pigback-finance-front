import styled from '@emotion/styled'
import { css, Typography } from '@mui/material'

export const CustomFormSignUp = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 355px;

    .form-sign-up__inputs {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 4rem;
      width: 100%;
    }

    ${theme.breakpoints.down('sm')} {
      width: 100%;
      padding: 0 40px;
    }
  `}
`

export const LinkToLogin = styled(Typography)`
  ${({ theme }) => css`
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.3;
    color: ${theme.palette.grey[200]};
    margin-top: 15px;
    display: flex;
    align-items: center;
  `}
`
