import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 94px;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 65px;
  }

  .banner-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin: 10px;
  }
`;

const ICON_COLORS = {
  'yellow-900': 'yellow-900',
  'yellow-500': 'yellow-500',
  'purple-500': 'purple-500',
  'gray-600': 'gray-600',
}

interface IconsProps {
  color: keyof typeof ICON_COLORS;
}

export const HomeIconsContainer = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  p {
    margin-left: 1rem;
  }
`;

export const BannerIcons = styled.div<IconsProps>`
  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  height: 38px;
  width: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;
