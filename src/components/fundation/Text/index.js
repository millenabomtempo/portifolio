/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';

const paragraph1 = css`
  font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
`;

const paragraph2 = css`
  font-size: ${({ theme }) => theme.typography.paragraph2.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph2.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph2.lineHeight};
`;

const paragraph3 = css`
  font-size: ${({ theme }) => theme.typography.paragraph3.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph3.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph3.lineHeight};
`;

const smallestException = css`
  font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
  font-weight: ${({ theme }) => theme.typography.smallestException.fontWeight};
  line-height: ${({ theme }) => theme.typography.smallestException.lineHeight};
`;

export const TextStyleVariants = {
  paragraph1,
  paragraph2,
  paragraph3,
  smallestException,
  title: css`
  ${({ theme }) => css`
    font-size: ${theme.typography.titleXS.fontSize};
    font-weight: ${theme.typography.titleXS.fontWeight};
    line-height: ${theme.typography.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    sm: css`
      ${({ theme }) => css`
        font-size: ${theme.typography.titleSM.fontSize};
        font-weight: ${theme.typography.titleSM.fontWeight};
        line-height: ${theme.typography.titleSM.lineHeight};
      `}
    `,
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typography.title.fontSize};
        font-weight: ${theme.typography.title.fontWeight};
        line-height: ${theme.typography.title.lineHeight};
      `}
    `,
  })}
`,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariants[props.variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('color')}
`;

export default function Text({
  tag,
  variant,
  children,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException']),
};
