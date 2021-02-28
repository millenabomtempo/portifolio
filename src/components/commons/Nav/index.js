import React from 'react';
import styled, { css } from 'styled-components';
import Text, { TextStyleVariants } from '../../fundation/Text';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const NavWrapper = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #000000;
    transition: 200ms ease-in-out;
    padding: 0 16px;
    ${breakpointsMedia(
    {
      xs: css`
        ${TextStyleVariants.paragraph3}
      `,
      sm: css`
        ${TextStyleVariants.paragraph2}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
    },
  )}
  }
`;

export default function Nav() {
  const links = [
    {
      text: 'Sobre',
      url: '/about',
    },
    {
      text: 'Contato',
      url: '/contact',
    },
  ];
  return (
    <NavWrapper>
      {links.map((link) => (
        <li key={link.url}>
          <Text
            tag="a"
            variant="smallestException"
            href={link.url}
          >
            {link.text}
          </Text>
        </li>
      ))}
    </NavWrapper>
  );
}
