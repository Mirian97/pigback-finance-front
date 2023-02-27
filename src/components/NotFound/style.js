import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CustomNotFound = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
    min-height: 515px;
    width: 100%;

    img {
      width: 700px;

      ${theme.breakpoints.down('md')} {
        width: 500px;
      }

      ${theme.breakpoints.down('sm')} {
        width: 300px;
      }
    }
  `}
`
