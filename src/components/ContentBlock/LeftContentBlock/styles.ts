import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 8rem 0 10rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media screen and (max-width: 768px) {
    padding: 6.5rem 0 6rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 55rem;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  padding: 2rem 0;
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
`;
