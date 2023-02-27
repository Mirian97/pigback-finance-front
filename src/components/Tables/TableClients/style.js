import styled from '@emotion/styled'
import { css, Paper, Typography } from '@mui/material'

export const CustomTableClients = styled(Paper)`
  ${({ theme }) => css`
    font-family: 'Nunito';
    border-radius: 30px;
    padding: 12px 23px;
    width: 100%;

    table {
      width: 100%;
      border-collapse: collapse;

      .container-title-table th {
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
        text-align: left;
        padding: 20px 0;
        border-bottom: 1px solid #eff0f7;
        color: ${theme.palette.grey[200]};

        img {
          cursor: pointer;
        }
      }

      tbody tr {
        cursor: pointer;

        :hover {
          background-color: ${theme.palette.grey[800]};
        }

        .client-name:hover {
          text-decoration: underline;
        }

        .link-charge {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 24px;
          }
        }

        td {
          text-align: left;
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.5%;
          padding: 15px 8px 15px 0;
          color: ${theme.palette.grey[300]};
          border-top: 1px solid #eff0f7;

          .client-status {
            display: flex;
            align-items: center;

            span {
              font-family: 'Nunito';
              font-weight: 600;
              font-size: 1.4rem;
              line-height: 1.9rem;
              border-radius: 8px;
              padding: 0px 8px;
              min-width: 100px;
              text-align: center;
            }
          }
        }
      }
    }
  `}
`

export const CustomTypographyTableClients = styled(Typography)`
  font-family: 'Nunito';
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.1rem;
`
