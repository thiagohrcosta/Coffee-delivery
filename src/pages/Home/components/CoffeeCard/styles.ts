import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  height: 310px;
  width: 256px;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 36px;

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

  .tags {
    display: flex;
    justify-content: space-evenly;
  }
`
