import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 3rem 0 6rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media screen and (max-width: 768px) {
    padding: 6.5rem 0 9rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
