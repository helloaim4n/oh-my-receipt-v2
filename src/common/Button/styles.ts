import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledButton = styled("button")<any>`
  background: #36f579;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #36f579;
  border-radius: 4px;
  padding: 13px 0;  
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);sssxzj

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #29c460;
    background-color: #29c460;
  }
`;
