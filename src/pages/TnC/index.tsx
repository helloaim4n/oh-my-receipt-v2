import TnC from '../../content/TermsAndConditions.json';
import { MiddleBlockSection, Content, ContentWrapper } from "../../components/MiddleBlock/styles";
import styled from 'styled-components';

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
    <TermsAndConditionsSection>
      <TermsAndConditionsWrapper>
        <h6>{TnC.title}</h6>
        <TermsAndConditionsContent>{TnC.text.join('\n')}</TermsAndConditionsContent>
      </TermsAndConditionsWrapper>
    </TermsAndConditionsSection>
  );
};

export default TermsAndConditions;