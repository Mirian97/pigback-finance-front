import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomFilter = styled('div')`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    box-shadow: 0px 4px 42px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    width: 330px;
    min-height: 250px;
    padding: 40px 33px;
    z-index: 2;
    position: absolute;
    top: 70px;
    right: 312px;

    .arrow-up {
      position: absolute;
      top: -13px;
      right: 30px;
      width: 0;
      height: 0;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      border-bottom: 15px solid white;
    }

    .filter-form {
      display: flex;
      flex-direction: column;
      gap: 8px;

      label {
        margin: 0;
      }
    }
  `}
`
