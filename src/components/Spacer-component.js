import React from 'react';
import styled from 'styled-components/native';

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space[2]}; ;
`;

const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]}; ;
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;

const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space[2]}; ;
`;

const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;

const Spacer = ({ variant }) => {
  if (variant === 'top.Small') return <TopSmall />;
  if (variant === 'top.Medium') return <TopMedium />;
  if (variant === 'top.Large') return <TopSmall />;
  if (variant === 'left.Small') return <LeftSmall />;
  if (variant === 'left.Medium') return <LeftMedium />;
  if (variant === 'left.Large') return <LeftLarge />;
};

export default Spacer;
