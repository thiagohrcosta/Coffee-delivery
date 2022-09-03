import styled from 'styled-components';

export const PaymentChoiceContainer = styled.div`
  margin: 20px 0;
  color: ${props => props.theme["gray-600"]};
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  .choice-container {
    background: ${props => props.theme["gray-200"]};
    padding: 10px;
    width: 33%;
    border-radius: 6px;
    border: 2px solid ${props => props.theme["gray-200"]};

    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
    }
  }

  .payment-selected {
    border: 2px solid ${props => props.theme["purple-500"]};
    transition: all 0.5s ease-in-out;
  }
`;
