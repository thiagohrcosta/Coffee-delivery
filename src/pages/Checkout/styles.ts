import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin: 50px auto 0;
  max-width: 1280px;

  .checkout-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .checkout-left-card {
    width: 60%;

    h2 {
      margin-bottom: 20px;
    }
  }

  .checkout-left-content {
    border-radius: 6px;

    background: ${props => props.theme["gray-100"]};
    padding: 2rem;

    h3, p {
      margin-left: 10px;
    }
  }

  .checkout-header {
    color: ${props => props.theme["gray-600"]};
    display: flex;
  }
`;

export const CheckoutInputs = styled.div`
  margin-top: 50px;

  input {
    background: ${props => props.theme["gray-200"]};
    height: 42px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
    padding: 0 10px;
  }

  input[type="text"] {
    box-shadow: none;

    outline: none;
    border: 3px solid ${props => props.theme["gray-200"]};
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  input[type=text]:focus {
    border: 3px solid ${props => props.theme["purple-500"]};
  }

  button {
    width: 38.5%;
    background: ${props => props.theme["purple-500"]};
    color: ${props => props.theme["gray-100"]};

    height: 42px;

    border: none;
    border-radius: 8px;
  }

  .address-cep {
    width: 60%;
  }

  .input-completed {
    input {
      width: 100%;
      margin: 10px 0;
    }

    .input-logradouro {
      display: flex;

      input:last-child {
        width: 200px;
        margin-left: 10px;
      }
    }

    .input-cidade {
      display: flex;

      input:last-child {
        width: 200px;
        margin-left: 10px;
      }
    }
  }
`;

export const SelectedCoffeeContainer = styled.div`
  width: 35%;

  h2 {
    margin-bottom: 20px;
  }

  img {
    width: 64px;
    height: 64px;
  }

  .selected-coffee-container {
    background: ${props => props.theme["gray-100"]};
    padding: 2rem;
    border-radius: 6px;

    .coffee-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .coffee-item-counter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;

        .remove-coffee {
          background: ${props => props.theme["gray-300"]};
          color: ${props => props.theme["gray-600"]};
          font-size: 0.825rem;
          padding: 5px;

          border-radius: 4px;

          display: flex;
          align-items: center;

          span {
            margin-left: 5px;
          }
        }
      }
    }

    .coffee-price {
      font-weight: bold;
    }

    .total-order {
      display: flex;
      flex-direction: column;

      color: ${props => props.theme["gray-600"]};

      .total-order-item {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        p:last-child {
          font-weight: bold;
        }
      }

      button {
        background: ${props => props.theme["yellow-500"]};
        color: ${props => props.theme["gray-100"]};

        border-radius: 6px;
        border: none;

        margin: 10px 0;
        height: 46px;
        width: 100%;
      }
    }

  }
`;
