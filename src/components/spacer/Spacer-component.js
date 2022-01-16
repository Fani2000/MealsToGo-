import React from 'react';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionsVariant = {
  top: 'margin-top',
  left: 'margin-left',
  bottom: 'margin-bottom',
  right: 'margin-right',
};

const getVariant = (position, size, theme) => {
  return `${positionsVariant[position]}:${theme.space[sizeVariant[size]]}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};

export default Spacer;
