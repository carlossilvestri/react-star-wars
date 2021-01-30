import styled from "@emotion/styled";

export const Btn1 = styled.button `
font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  background: #f24c00;
  padding: 5px 13px;
  border: 3px solid #f24c00;
  box-sizing: border-box;
  border-radius: 10px;
  transition: background-color 0.5s ease;
  transition: color 0.5s ease;
  transition: border 0.5s ease;
  margin-right: 10px;
  text-align: center;
  &:hover {
    background-color: white;
    color: #f24c00;
    border: 3px solid #ffeee1;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1269px) {
    width: 90%;
    margin: 0 auto 10px auto;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;
