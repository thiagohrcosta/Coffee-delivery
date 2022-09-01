import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  height: 310px;
  width: 256px;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 36px 0;

  h2 {
    font-size: 1.25rem !important;
    color: ${(props) => props.theme["gray-700"]};
    text-align: center;
    margin-top: 16px;
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
    margin: 8px 0;
  }

  img {
    width: 120px;
    height: 120px;

    margin-top: -20px;
    margin-bottom: 20px;
  }

  span {
    color: ${(props) => props.theme['gray-600']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }

  .coffee-checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin-right: 20px;
    }

    .coffee-amount {
      display: flex;
      align-items: center;

      height: 39px;
      margin-right: 10px;

      background: ${(props) => props.theme['gray-300']};


      span {
        color: ${(props) => props.theme['purple-500']};
        cursor: pointer;
        padding: 5px;
      }

      input {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        width: 40px;
        background: ${(props) => props.theme['gray-300']};
        border: none;
      }
    }

    .cart-container {
      background: ${(props) => props.theme['purple-900']};
      height: 38px;
      width: 38px;
      border-radius: 6px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .tags {
    display: flex;
    justify-content: space-evenly;
  }


`
