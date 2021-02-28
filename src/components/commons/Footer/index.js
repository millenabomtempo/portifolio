import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4%;
  background-color: ${({ theme }) => theme.colors.primary.darker.color};
  a {
    padding-left: 5px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <a href="https://twitter.com/MillenaBomtempo">
        <img src="/images/twitter.svg" alt="Logo Twitter" />
      </a>
      <a href="https://github.com/millenabomtempo">
        <img src="/images/github.svg" alt="Logo GitHub" />
      </a>
    </FooterWrapper>
  );
}
