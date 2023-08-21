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
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;
