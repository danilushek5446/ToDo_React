import styled, { css } from "styled-components";

export const StyledToDoInputForm = styled.form<{ isChecked: boolean }>`
  display: flex;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  label {
    font-size: 22px;
    color: ${({theme}) => theme.colors.logo};
  }
  ${({ isChecked }) => {
    if (isChecked) {
      return css`
        label {
          color: ${({theme}) => theme.colors.activeAll};
        }
      `
    }
  }}
`;

export const StyledToDoTogleAllInput = styled.input`
  top: 16px;
  left: 10px;
  width: 30px;
  height: 30px;
  text-align: center;
  border: none;
  opacity: 0;
  position: absolute;
  z-index: 999;
`;

export const StyledToDoTogleAllLabel = styled.label`
  cursor: default;
  font-size: 22px;
  color: ${({theme}) => theme.colors.highligth};
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
`;

export const StyledNewToDoInput = styled.input`
  padding-top: 16px;
  padding-bottom: 16px;
  margin-left: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  position: relative;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  ::placeholder{
    opacity: 20%;
  }
`;