import styled from 'styled-components';

export const CoffeeTagContainer = styled.div`
  background: ${(props) => props.theme['yellow-100']};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  width: 81px;
  height: 21px;

  font-size: 10px;
  font-weight: 700;

  margin: 0 5px;

  p {
    color: ${(props) => props.theme['yellow-900']} !important;
  }
`
