import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
  margin-top: 100px;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }

  .coffee-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
