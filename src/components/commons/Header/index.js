import React from 'react';
import HeaderWrapper from './styles/HeaderWrapper';
import Logo from '../../theme/Logo';
import Nav from '../Nav';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo
          width="20%"
          height="20%"
        />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide>
        <Nav />
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
