import styled from 'styled-components';

const HeaderWrapper = styled.div`
  font-family: 'Fira Sans Condensed', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-left: 10px;
  padding-right: 30px;
  background-color: #EFF1F8
  
`;
HeaderWrapper.LeftSide = styled.div`
  margin: 0;
  padding: 0;
`;

HeaderWrapper.RightSide = styled.div`
  margin: 0;
  padding: 0;
`;

export default HeaderWrapper;
