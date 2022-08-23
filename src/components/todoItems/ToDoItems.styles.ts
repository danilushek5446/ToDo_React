import styled, { css } from "styled-components";

export const StyledTodoItemDiv = styled.div<{ checked: boolean }>`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ededed;
  :hover{
    .destroy {
	    display: block;
    }
  }
  ${({ checked }) => {
    if (checked) {
      return css`
        label {
          background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
        }
        span {
          color: #d9d9d9;
	        text-decoration: line-through;
        }
      `
    }
  }}
`;

export const StyledTodoItemForm = styled.form`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ededed;
`;

export const StyledToggleInput = styled.input`
		text-align: center;
	width: 40px;
	height: 40px;
	margin: auto 0;
	border: none;
	-webkit-appearance: none;
	appearance: none;
	opacity: 0;
	position: absolute;
	z-index: 999;
	margin-left: 7px;
`;

export const StyledCheckboxLabel = styled.label`
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
	background-repeat: no-repeat;
	background-position: center left;
	width: 40px;
	height: 40px;
	margin-left: 7px;
`;

export const StyledTodoItemSpan = styled.span`
	word-break: break-all;
	transition: color 0.4s;
	padding-top: 16px;
	padding-bottom: 16px;
	margin-left: 15px;
	position: relative;
	width: 84%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
`;

export const StyledToDoTextInput = styled.input`
  word-break: break-all;
	padding-top: 16px;
	padding-bottom: 16px;
	margin-left: 50px;
	position: relative;
	width: 89%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	outline-width: 1px;
	outline: 1px;
	border: 1px solid #999;
`;

export const StyledDestroyButton = styled.button`
	background: none;
	border: none;
	display: none;
	width: 40px;
	height: 40px;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
`;