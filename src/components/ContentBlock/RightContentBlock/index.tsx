import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon";
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
  // ServiceWrapper, // Add ServiceWrapper
  // MinTitle,
  // MinPara,
} from "./styles";

const RightBlock = ({
  title,
  content,
  icon,
  // button,
  // section,
  id,
}: ContentBlockProps) => {

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <RightBlockContainer id={id}>
      <Fade direction="right">
        <Row justify="center" align="middle" >
        <Col lg={11} md={11} sm={12} xs={24}>
            <ContentWrapper>
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
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
          {/* <ServiceWrapper> 
                <Row justify="center">
                  {typeof section === "object" &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    section.map((item: any, id: number) => (
                      <Col key={id} span={11}>
                        <MinTitle>{item.title}</MinTitle>
                        <MinPara>{item.content}</MinPara>
                      </Col>
                    ))}
                </Row>
          </ServiceWrapper> */}
          </ContentWrapper>
          </Col>
          <Col lg={8} md={8} sm={8} xs={15}>
          <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default RightBlock;
