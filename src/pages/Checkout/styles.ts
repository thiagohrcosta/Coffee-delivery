import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin: 50px auto;
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
