import styled from 'styled-components';

export const HomeIconsContainer = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  p {
    margin-left: 1rem;
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

export const BannerIcons = styled.div<IconsProps>`
  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  height: 38px;
  width: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;
