import styled from '@emotion/styled'

export const CustomHeader = styled('header')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 100vw solid #acd9c5;
  border-width: 1px;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    flex-wrap: wrap;

    .title {
      margin-bottom: -16px;
    }

    .user {
      font-family: 'Nunito';
      font-weight: 600;
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      color: #0e8750;
      padding-bottom: 24px;

      .user-img {
        width: 48px;
        height: 48px;
        padding: 11px;
        background-color: #dedee9;
        border-radius: 100%;
        margin-right: 16px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 30px;
        }
      }

      .user-name {
        display: flex;
        gap: 8px;
        position: relative;

        h3 {
          font-family: 'Nunito';
          font-weight: 600;
          font-size: 1.8rem;
          line-height: 2.5rem;
        }

        img {
          cursor: pointer;
        }
      }
    }
  }
`
