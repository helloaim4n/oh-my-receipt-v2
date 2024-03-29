import { Row, Col } from "antd";
// import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Slide } from "react-awesome-reveal";

interface MiddleBlockProps {
  title: string;
  content: string;
}

const MiddleBlock = ({ title, content}: MiddleBlockProps) => {
  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <MiddleBlockSection>
      <Slide direction="up">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24}>
                <h6>{(title)}</h6>
                <Content>{(content)}</Content>
                {/* {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {(button)}
                  </Button>
                )} */}
              </Col>
            </ContentWrapper>
          </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
