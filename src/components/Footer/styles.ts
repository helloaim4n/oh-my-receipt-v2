import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: linear-gradient(120deg, #c2e8c2 0%, #a1d9a1 100%);
  padding: 2.5rem 0;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #006400;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: uppercase;
  color: #006400;
  letter-spacing: 2px;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #006400;

  &:hover,
  &:active,
  &:focus {
    color: #006400;
    text-decoration: underline;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #006400;
  font-size: 14px;
  width: 70%;
  text-align: center;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #006400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #006400;
  max-width: fit-content;
  border-bottom: 1px solid #006400;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: uppercase;
  color: #006400;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

