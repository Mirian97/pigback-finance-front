import styled from '@emotion/styled'
import { css, Typography } from '@mui/material'

export const CustomEditDeleteOption = styled(Typography)`
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.1rem;
`

export const CustomTypographyNamePage = styled(Typography)`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.6rem;
  color: #0e8750;
  margin-bottom: -80px;
`

export const CustomTypographyEllipsis = styled(Typography)`
  ${({ theme }) => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;

    ${theme.breakpoints.up('lg')} {
      max-width: 350px;
    }

    ${theme.breakpoints.down('md')} {
      max-width: 120px;
    }
  `}
`
