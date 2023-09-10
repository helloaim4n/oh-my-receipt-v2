import { Row, Col } from "antd";
import privacyPolicy from '../../content/PrivacyPolicy.json';
import { StyledContainer } from "../../common/Container/styles";
import { StyledButton } from "../../common/Button/styles";
import styled from "styled-components";

const PrivacyPolicySection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0 3rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 2rem 0 3rem;
  }
`;

// Styled component for the Terms and Conditions content
const PrivacyPolicyContent = styled.p`
  font-family: 'Handjet', sans-serif;
  padding: 0.75rem 0 0.75rem;
  white-space: pre-line;
  text-align: justify;
  text-justify: inter-word;`;

// Styled component for the Terms and Conditions wrapper
const PrivacyPolicyWrapper = styled.div`
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


const PrivacyPolicy = () => {
  return (
    <StyledContainer>
      <PrivacyPolicySection>
          <Row justify="center" align="middle">
            <PrivacyPolicyWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                  <h6>{privacyPolicy.title}</h6>
            <PrivacyPolicyContent>{privacyPolicy.text.join('\n')}</PrivacyPolicyContent>
            <a href="/">
              <StyledButton type="primary" size="large">{("Back to Home")}</StyledButton>
            </a>
              </Col>
          </PrivacyPolicyWrapper>
          </Row>
        </PrivacyPolicySection>
    </StyledContainer>
  );
};

export default PrivacyPolicy;
