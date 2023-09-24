import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0 6rem;
  }
`;

export const Content = styled("p")`
  margin: 0.75em 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  right: 5rem;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
    margin-bottom: 4rem;
    right: 0;
  }
`;

// export const StyleH6 = styled("h6")`
//   font-size: 2.5rem;
// `;

// export const ButtonWrapper = styled("div")`
//   display: flex;
//   justify-content: center;
//   max-width: 100%;
//   align-items: center;

//   @media screen and (min-width: 1024px) {
//     max-width: 80%;
//   }

//   button:last-child {
//     margin-left: 20px;
//   }
// `;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 2rem 0;
  text-align: center;
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
  justify-content: center;

  @media only screen and (max-width: 575px) {
    font-size: 17px;
    padding: 0;
  }
`;
