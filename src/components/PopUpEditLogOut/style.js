import styled from '@emotion/styled'
import { css, Paper } from '@mui/material'

export const CustomPopUp = styled(Paper)`
  ${({ theme }) => css`
    background-color: white;
    border-radius: 8px;
    color: ${theme.palette.grey[300]};
    filter: drop-shadow(0px 4px 42px rgba(0, 0, 0, 0.2));
    max-width: 95px;
    min-height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 8px 15px;
    z-index: 2;
    position: absolute;
    top: 45px;
    right: -40px;

    :hover {
      transform: scale(1.5);
    }

    .pop-up__column {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      span {
        font-family: 'Nunito';
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 1.1rem;
      }

      .edit-icon {
        width: 18px;
        height: 18px;
        margin-bottom: 4px;
      }

      .log-out-icon {
        width: 24px;
        height: 24px;
      }
    }
  `}
`
