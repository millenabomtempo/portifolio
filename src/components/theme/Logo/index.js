/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import propToStyle from '../utils/propToStyle';

const Img = styled.img`
  ${propToStyle('width')}
  ${propToStyle('heigth')}
`;

export default function Logo({ ...props }) {
  return (
    <Img
      src="/images/logoLight.svg"
      alt="Logo"
      {...props}
    />
  );
}
