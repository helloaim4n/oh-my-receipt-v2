import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;


export const ContentTitle = styled("h6")`
`

export const Content = styled("p")`
  padding: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  margin-left: 10rem;
  margin-top: 10rem;
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 2rem;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const ServiceWrapper = styled("div")`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 0;

  @media only screen and (max-width: 575px) {
    margin-top: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 20px;
  line-height: 19px;
  padding: 0;
  text-transform: uppercase;
  color: #000000;
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
    margin:10px;
    padding: 0;
    text-align: justify;`