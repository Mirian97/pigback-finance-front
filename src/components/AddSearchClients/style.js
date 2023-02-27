import styled from '@emotion/styled'
import { Button, css } from '@mui/material'

export const CustomSectionAddSearchClients = styled('section')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    padding: 0 50px;

    .people-text {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
    }

    .container-add-search {
      font-family: 'Nunito';
      display: flex;
      align-items: center;
      gap: 16px;

      .container-search {
        display: flex;
        gap: 16px;
        position: relative;
        z-index: 1;

        .filter-icon {
          background-color: ${theme.palette.background.paper};
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
        }

        input {
          min-height: 39px;
          width: 318px;
          border-radius: 10px;
          padding: 7px 8px 7px 8px;
          border: 0;
          box-shadow: 2px 2px 2px #da01750d;
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;

          ::placeholder {
            color: ${theme.palette.grey[300]};
          }
        }

        .search-icon {
          cursor: pointer;
          position: absolute;
          right: 15px;
          top: 10px;
        }
      }
    }
  `}
`

export const CustomButtomAddClient = styled(Button)`
  ${({ theme }) => css`
    width: 267px;
    max-height: 33px;
    positon: static;

    .plus-icon {
      margin-right: 8px;
    }

    ${theme.breakpoints.down('lg')} {
      width: 200px;
    }
  `}
`
