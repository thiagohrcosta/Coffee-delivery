import styled from 'styled-components';

export const PaymentContainer = styled.nav`
  background: ${props => props.theme["gray-100"]};
  border-radius: 6px;
  padding: 2rem;
  margin: 20px 0;

  .payment-header {
    display: flex;

    h3, p {
      margin-left: 10px;
      color: ${props => props.theme["gray-600"]};
    }

    .payment-message {
      display: flex;
      flex-direction: column;
    }
  }
`;
