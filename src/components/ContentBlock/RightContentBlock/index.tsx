import { Row, Col } from "antd";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ServiceWrapper,  // Added ServiceWrapper import
  MinTitle,
  MinPara,
} from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  section,  // Added section prop
  id,
}: ContentBlockProps) => {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  button.map((item: any, id: number) => (
                    <Button
                      key={id}
                      color={item.color}
                      fixedWidth={true}
                      onClick={() => scrollTo("about")}
                    >
                      {item.title}
                    </Button>
                  ))}
              </ButtonWrapper>
              <ServiceWrapper>  {/* Add ServiceWrapper */}
                <Row justify="space-between">
                  {typeof section === "object" &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    section.map((item: any, id: number) => (
                      <Col key={id} span={11}>
                        <MinTitle>{item.title}</MinTitle>
                        <MinPara>{item.content}</MinPara>
                      </Col>
                    ))}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default RightBlock;
