import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const CustomTableResumeCharges = styled(Paper)`
  font-family: 'Nunito';
  width: 100%;
  box-shadow: 0px 4px 4px rgba(172, 217, 197, 0.25);
  border-radius: 30px;

  .card-table-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    padding: 18px;

    span {
      border-radius: 8px;
      padding: 0px 15px;
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: 10px;
    }
  }

  .table-content {
    border-collapse: collapse;
    width: 100%;
    padding: 0 24px;

    thead th {
      font-size: 1.6rem;
      font-weight: 700;
      border-bottom: 1px solid #eff0f7;
      border-top: 1px solid #eff0f7;
      padding: 19px;
    }

    tbody td {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.5%;
      padding: 16px;
      color: #6e6e85;
      border-bottom: 1px solid #eff0f7;
    }
  }

  .table-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
`
