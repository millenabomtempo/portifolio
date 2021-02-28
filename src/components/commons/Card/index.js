import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';

const Card = styled.div`
  margin: 8px;
  border-radius: 8px;
  background-color: #EFF1F8;
  ${breakpointsMedia(
    {
      xs: css`
        width: 150px;
        height: 100px;
      `,
      sm: css`
        width: 250px;
        height: 200px;
      `,
      md: css`
        width: 350px;
        height: 250px;
      `,
    },
  )}
`;

Card.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpointsMedia(
    {
      xs: css`
        order: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
      `,
      sm: css`
      `,
      md: css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        order: initial;
      `,
    },
  )}
`;

Card.Title = styled.h1`
  margin: 2px;
  padding: 5px;
  text-align: center;
  ${breakpointsMedia(
    {
      xs: css`
        font-size: ${({ theme }) => theme.typography.subTitleXS.fontSize};
        font-weight: ${({ theme }) => theme.typography.subTitleXS.fontWeight};
        line-height: ${({ theme }) => theme.typography.subTitleXS.lineHeight};
      `,
      sm: css`
        font-size: ${({ theme }) => theme.typography.subTitleSM.fontSize};
        font-weight: ${({ theme }) => theme.typography.subTitleSM.fontWeight};
        line-height: ${({ theme }) => theme.typography.subTitleSM.lineHeight};
      `,
      md: css`
        font-size: ${({ theme }) => theme.typography.subTitle.fontSize};
        font-weight: ${({ theme }) => theme.typography.subTitle.fontWeight};
        line-height: ${({ theme }) => theme.typography.subTitle.lineHeight};
      `,
    },
  )}
`;

Card.Image = styled.div`
  height: 60%;
  background-size: cover;
  background-position: center;
  background-image: url('/images/logoDark.svg');
  background-color: #583C87;
  margin: 2px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Card.Description = styled.p`
  margin: 2px;
  padding: 4px;
  
  ${breakpointsMedia(
    {
      xs: css`
        font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typography.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typography.smallestException.lineHeight};
        ${propToStyle('visibility')};
      `,
      sm: css`
        font-size: ${({ theme }) => theme.typography.paragraph3.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraph3.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraph3.lineHeight};
        ${propToStyle('visibility')};
      `,
      md: css`
        font-size: ${({ theme }) => theme.typography.paragraph2.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraph2.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraph2.lineHeight};
        ${propToStyle('visibility')};
      `,
    },
  )}
`;

Card.Main = styled.div`
  
  margin: 8px;
  border-radius: 8px;
  background-color: #EFF1F8;
  ${breakpointsMedia(
    {
      xs: css`
        width: 300px;
        height: 200px;
        order: 1;
      `,
      sm: css`
        width: 400px;
        height: 300px;
      `,
      md: css`
        width: 600px;
        height: 300px;
      `,
    },
  )}
`;

export default Card;
