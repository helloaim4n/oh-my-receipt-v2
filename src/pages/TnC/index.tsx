/* eslint-disable @typescript-eslint/no-explicit-any */
// Importing necessary libraries and components
import { Row, Col } from "antd";
import TnC from '../../content/TermsAndConditions.json';
import styled from 'styled-components';
import { StyledContainer } from "../../common/Container/styles";
import { StyledButton } from "../../common/Button/styles";

// Styled component for the Terms and Conditions section
const TermsAndConditionsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0 3rem;
  text-align: center;

  // Responsive design for screens with max-width 1024px
  @media screen and (max-width: 1024px) {
    padding: 2rem 0 3rem;
  }
`;

// Styled component for the Terms and Conditions content
const TermsAndConditionsContent = styled.p`
  padding: 0.75rem 0 0.75rem;
  white-space: pre-line;
  text-align: justify;
  text-justify: inter-word;
`;

// Styled component for the Terms and Conditions wrapper
const TermsAndConditionsWrapper = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto; 
  background-color: #f5f5f5;
  padding: 2rem;


  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 1;
  }
`;

// // Styled component for the unique design of the button
//  const ButtonStyles = styled(Button)<any>`
//   background: #88b04b;
//   color: #fff;
//   font-size: 1rem;
//   font-weight: 700;
//   width: 100%;
//   border: 1px solid #edf3f5;
//   border-radius: 4px;
//   padding: 13px 0;
//   cursor: pointer;
//   margin-top: 0.625rem;
//   max-width: 180px;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

//   &:hover,
//   &:active,
//   &:focus {
//     color: #fff;
//     border: 1px solid #006400;
//     background-color: #006400;
//   }
// `;

// Terms and Conditions component
const TermsAndConditions = () => {
  return (
    <StyledContainer>
      <TermsAndConditionsSection>
        <Row justify="center" align="middle">
          <TermsAndConditionsWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{TnC.title}</h6>
              <TermsAndConditionsContent>{TnC.text.join('\n')}</TermsAndConditionsContent>
              <a href="/">
                <StyledButton type="primary" size="large">{"Back to Home"}</StyledButton>
              </a>
            </Col>
          </TermsAndConditionsWrapper>
        </Row>
      </TermsAndConditionsSection>
    </StyledContainer>
  );
};

// Exporting the Terms and Conditions component
export default TermsAndConditions;