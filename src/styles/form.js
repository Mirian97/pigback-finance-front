import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FormControlLabel } from '@mui/material'

export const CustomFormControlLabel = styled(FormControlLabel)`
  ${({ theme }) => css`
    background-color: ${theme.palette.grey[700]};
    border-radius: 10px;
    width: 100%;
  `}
`
