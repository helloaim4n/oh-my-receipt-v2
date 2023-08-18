import { Row, Col, Button } from "antd";
import privacyPolicy from '../../content/PrivacyPolicy.json';
import { MiddleBlockSection, Content, ContentWrapper } from "../../components/MiddleBlock/styles";
import { StyledContainer } from "../../common/Container/styles";
import styled from "styled-components";

const PrivacyPolicySection = styled(MiddleBlockSection)`
  position: relative;
  padding: 4.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 2rem 0 3rem;
  }
`;

const PrivacyPolicyContent = styled(Content)`
  padding: 0.75rem 0 0.75rem;
  white-space: pre-line;
`;

const PrivacyPolicyWrapper = styled(ContentWrapper)`
  max-width: 75%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
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
              <Button type="primary" size="large">{("Back to Home")}</Button>
            </a>
              </Col>
          </PrivacyPolicyWrapper>
          </Row>
        </PrivacyPolicySection>
    </StyledContainer>
  );
};

export default PrivacyPolicy;
