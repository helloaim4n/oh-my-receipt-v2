import { Row, Col } from "antd";
// import { SvgIcon } from "../../../common/SvgIcon";
// import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  // ButtonWrapper,
  ServiceWrapper, // Add ServiceWrapper
  MinTitle,
  MinPara,
} from "./styles";

const RightBlock = ({
  title,
  content,
  // button,
  section,
  id,
}: ContentBlockProps) => {

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="center" align="middle" id={id}>
            <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
              </Col>
                          </ContentWrapper>
              {/* <ButtonWrapper>
                {typeof button === "object" &&
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper> */}
              <ServiceWrapper>  {/* Add ServiceWrapper */}
                <Row justify="center">
                  {typeof section === "object" &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    section.map((item: any, id: number) => (
                      <Col key={id} span={12}>
                        <MinTitle>{item.title}</MinTitle>
                        <MinPara>{item.content}</MinPara>
                      </Col>
                    ))}
                </Row>
              </ServiceWrapper>
          {/* <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col> */}
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default RightBlock;
