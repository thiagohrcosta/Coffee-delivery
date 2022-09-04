import styled from 'styled-components';

export const FinishedContainer = styled.div`
  margin: 100px 0;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme["yellow-900"]} !important;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .delivery-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .delivery-resume {
      width: 50%;
      padding: 20px;
      border-radius: 6px 36px 6px 36px;
      /* need to add a gradient border with #DBAC2C and #8047F8 */
      border: 1px solid ${props => props.theme["yellow-900"]};
    }

    .delivery-item {
      display: flex;
      margin: 20px 0;
      p {
        margin-left: 10px;
      }

      .delivery-message {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
