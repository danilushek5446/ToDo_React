import styled, { css } from "styled-components";

export const FooterDiv = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  overflow: hidden;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
  @media (max-width: 430px) {
    .footer {
      height: 50px;
    }
  }
`;

export const FooterCountSpan = styled.span`
  float: left;
  text-align: left;
`;

export const FiltersDiv = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
  button {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  background: none;
  }
  button:hover {
  border-color: rgba(175, 47, 47, 0.2);
  border-radius: 3px;
  }
  .active {
  border-color: rgba(175, 47, 47, 0.2);
  border-radius: 3px;
  }

  @media (max-width: 430px) {
    filters {
      bottom: 0px;
    }
  }
`;

export const DeleteAllButton = styled.button`
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 666;
  :hover {
  text-decoration: underline;
}
`;