import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 0;
  }
`;

export const Content = styled("p")`
  padding: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 0;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  padding: 0;
`;

export const MinTitle = styled("h6")`
  font-size: 20px;
  line-height: 19px;
  padding: 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 20px;
  margin: 10px;
  padding: 0.5rem 0;
  margin-bottom: 60px;
  justify-content: center;

  @media only screen and (max-width: 575px) {
    font-size: 17px;
    padding: 0;
    text-align: center;
    text-justify: inter-word;`;