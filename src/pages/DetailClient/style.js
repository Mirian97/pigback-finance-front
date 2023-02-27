import styled from '@emotion/styled'
import { Container, css, Paper } from '@mui/material'

export const CustomContentDetailClient = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 32px;

  .detail-client__header {
    display: flex;
    gap: 16px;
    margin-bottom: -30px;
  }

  .detail-client {
    padding: 0 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .client-name {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 28px;
    }
  }
`

export const CustomCardDataClient = styled(Paper)`
  ${({ theme }) => css`
    font-family: 'Nunito';
    width: 100%;
    padding: 24px;
    border-radius: 30px;

    .data-client__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      width: 100%;

      button {
        max-height: 33px;
        min-width: 252px;
      }
    }

    table {
      width: 100%;
      text-align: left;

      .table-header tr th {
        text-align: left;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 8px 8px 8px 0;
        color: ${theme.palette.grey[200]};
      }

      .table-body {
        text-align: left;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${theme.palette.grey[200]};

        td {
          padding: 8px 8px 8px 0;
        }
      }
    }
  `}
`

export const CustomCardChargesClient = styled(Paper)`
  ${({ theme }) => css`
    font-family: 'Nunito';
    width: 100%;
    padding: 24px;
    border-radius: 30px;

    .charges-client__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      width: 100%;

      button {
        max-height: 33px;
        min-width: 252px;

        img {
          margin-right: 8px;
        }
      }
    }

    table {
      border-collapse: collapse;
      width: 100%;
      text-align: left;

      .table-header tr th {
        text-align: left;
        font-weight: 700;
        font-size: 1.6rem;
        padding: 20px 8px 20px 0;
        border-bottom: 1px solid #eff0f7;
        color: ${theme.palette.grey[200]};

        img {
          cursor: pointer;
        }
      }

      .table-body {
        text-align: left;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 10px 0;
        border-top: 1px solid #eff0f7;
        color: #6e6e85;

        tr:hover {
          background-color: ${theme.palette.grey[800]};
        }

        tr {
          cursor: pointer;
        }

        tr td {
          padding: 10px 8px 10px 0;
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
