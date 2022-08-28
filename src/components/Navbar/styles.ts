import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;

  padding: 2rem 1rem;
`;

export const NavbarLocation = styled.div`
  display: flex;
`;

export const CityContainer = styled.div`
  background: ${props => props.theme["purple-100"]};
  height: 38px;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`

export const CartContainer = styled.div`
  background: ${props => props.theme["yellow-100"]};
  height: 38px;
  width: 38px;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
