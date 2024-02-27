import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  flex-grow: 1;
  flex: 1;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding: 5rem 0 4rem;
  }

  @media screen and (max-width: 575px) {
    padding: 5rem 0 3rem;
  }

  @media screen and (max-width: 375px) {
    padding: 5rem 0 2rem;
  
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  text-align: center;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 575px) {
    max-width: 100%;
  }
`;
