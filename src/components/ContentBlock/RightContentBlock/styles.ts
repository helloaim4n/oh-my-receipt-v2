import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  flex: 1;
  position: relative;
  padding: 10rem 0 3rem;
  flex-grow: 1;

  @media only screen and (max-width: 1200px) {
    padding: 4rem 0 3rem;
  }

  @media only screen and (max-width: 575px) {
    padding: 1rem 0 3rem;
  }

    @media only screen and (max-width: 375px) {
    padding: 0 0 2rem;
  }
`;

export const Content = styled("p")`
  margin: 0.75em 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  right: 5rem;
  max-width: 540px;

  @media only screen and (max-width: 1200px) {
    right: 2rem;
  }

  @media only screen and (max-width: 575px) {
    padding-top: 2.5rem;
    margin-bottom: 2rem;
    right: 0;
  }
`;

export const StyleH6 = styled("h6")`
  font-size: 2.5rem;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 80%;
  align-items: center;

  button:last-child {
    margin-left: 10px;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 80%;
  text-align: center;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 20px;
  line-height: 19px;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  margin-bottom: 60px;

  @media only screen and (max-width: 575px) {
    font-size: 17px;
    padding: 0;
  }
`;
