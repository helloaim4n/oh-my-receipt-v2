import { Row, Col } from "antd";
import TnC from '../../content/TermsAndConditions.json';
import { MiddleBlockSection, Content, ContentWrapper } from "../../components/MiddleBlock/styles";
import styled from 'styled-components';
import { StyledContainer } from "../../common/Container/styles";

const TermsAndConditionsSection = styled(MiddleBlockSection)`
  position: relative;
  padding: 4.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  

  @media screen and (max-width: 1024px) {
    padding: 2rem 0 3rem;
  }
`;

const TermsAndConditionsContent = styled(Content)`
padding: 0.75rem 0 0.75rem;
white-space: pre-line;
`;

const TermsAndConditionsWrapper = styled(ContentWrapper)`
  max-width: 75%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
}
`;

const TermsAndConditions = () => {
  return (
    <StyledContainer>
    <TermsAndConditionsSection>
    <Row justify="center" align="middle">
      <TermsAndConditionsWrapper>
      <Col lg={24} md={24} sm={24} xs={24}>
        <h6>{TnC.title}</h6>
        <TermsAndConditionsContent>{TnC.text.join('\n')}</TermsAndConditionsContent>
        </Col>
      </TermsAndConditionsWrapper>
      </Row>
    </TermsAndConditionsSection>
    </StyledContainer>
  );
};

export default TermsAndConditions;