import styled from "styled-components";

export const StyledToDoFormDiv = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export const StyledTodoTitleDiv = styled.div`
  position: absolute;
  top: -74px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: ${({theme}) => theme.colors.highligth};
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;