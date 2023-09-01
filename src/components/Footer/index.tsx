import { Row, Col } from "antd";
import Container from "../../common/Container";
import { useNavigate } from "react-router-dom";
import {
  FooterSection,
  Title,
  Para,
  Large,
  // Chat,
  // Language,
} from "./styles";

const Footer = () => {

  const navigate = useNavigate();

  const handleLinkClick = (route: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(route);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{("Contact")}</Title>
              <Large to="mailto:aimanaizuddin30@gmail.com">{("Tell us everything")}</Large>
              <Para>
                {(`Do you have any question? Feel free to reach out.`)}
              </Para>
              {/* <a href="#chat">
                <Chat>{(`Let's Chat`)}</Chat>
              </a> */}
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{("Policy")}</Title>
              <Large to="/privacy-policy" onClick={handleLinkClick('/privacy-policy')}>
                {("Privacy")}
              </Large>
              <Large to="/terms-and-conditions" onClick={handleLinkClick('/terms-and-conditions')}>
                {("Terms & Conditions")}
              </Large>
            </Col>
            </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default Footer;
