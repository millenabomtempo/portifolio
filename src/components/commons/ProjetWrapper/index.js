import styled from 'styled-components';

const ProjetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  background: ${({ theme }) => theme.colors.primary.main.color};
`;

export default ProjetWrapper;
