import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

// Define the MiddleBlock component
interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
}

const MiddleBlock = ({ title, content, button}: MiddleBlockProps) => {
  // Function to scroll to a specific section of the webpage
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      {/* Slide animation */}
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {/* Title */}
              <h6>{(title)}</h6>
              {/* Content */}
              <Content>{(content)}</Content>
              {/* Button */}
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>s
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

// Export the MiddleBlock component as the default export, wrapped with the withTranslation higher-order component
export default MiddleBlock;
