import styled from '@emotion/styled'
import { css, Paper } from '@mui/material'

export const CustomTableCharges = styled(Paper)`
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
        text-align: left;
        padding: 20px 8px 20px 0;
        border-bottom: 1px solid #eff0f7;
        color: ${theme.palette.grey[200]};

        img {
          cursor: pointer;
        }
      }

      tbody .table-body-row {
        cursor: pointer;

        :hover {
          background-color: ${theme.palette.grey[800]};
        }

        td {
          text-align: left;
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.5%;
          padding: 15px 8px 15px 0;
          color: ${theme.palette.grey[300]};
          flex-wrap: wrap;
          text-overflow: ellipsis;
          border-top: 1px solid #eff0f7;

          span {
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 1.9rem;
            border-radius: 8px;
            padding: 0px 10px;
            width: 100px;
          }
        }

        .client-name:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .options-charges {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .edit-delete {
            display: flex;
            align-items: center;
            gap: 24px;

            div {
              cursor: pointer;
            }
          }
        }
      }
    }
  `}
`
