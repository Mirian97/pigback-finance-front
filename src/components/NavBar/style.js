import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomNavBar = styled('aside')`
  ${({ theme }) => css`
    min-width: 108px;
    min-height: 100vh;
    background-color: ${theme.palette.grey[700]};

    .nav-bar-content {
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7.2rem;

      .nav-bar-item {
        cursor: pointer;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        :hover {
          border-right: 3px solid #da0175;
          transform: scale(1.03);
        }

        img {
          width: 48px;
        }

        h4 {
          font-family: 'Nunito';
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 2.2rem;
          color: ${theme.palette.grey[100]};
        }
        .active {
          color: #da0175;
        }
      }
      .border-right {
        border-right: 3px solid #da0175;
      }
    }
  `}
`
