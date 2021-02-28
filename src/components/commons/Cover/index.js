import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../fundation/Text';
import Logo from '../../theme/Logo';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const CoverWrapper = styled.div`
  font-family: 'Fira Sans Condensed', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${breakpointsMedia(
    {
      xs: css`
        height: 30vh;
      `,
      md: css`
        height: 100vh;
      `,
    },
  )}
  background-color: ${({ theme }) => theme.colors.primary.darker.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

export default function Cover() {
  return (
    <CoverWrapper>
      <Logo
        width="20%"
        height="20%"
      />
      <Text
        tag="h1"
        variant="title"
        textAlign="center"
      >
        Millena Brito Bomtempo
      </Text>
      <Text
        tag="p"
        variant="paragraph1"
        textAlign="center"
      >
        Portfolio
      </Text>
    </CoverWrapper>
  );
}
