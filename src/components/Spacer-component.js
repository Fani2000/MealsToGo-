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

const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};

export default Spacer;
