// Import necessary functions and components from libraries and local files
import { Row, Col } from "antd";
// import { SvgIcon } from "../../../common/SvgIcon"; 
import { ContentBlockProps } from "../types"; 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Fade } from "react-awesome-reveal"; 
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles"; 

const LeftContentBlock = ({
  title,
  content,
  section,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          {/* <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col> */}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <MinTitle>{(item.title)}</MinTitle>
                          <MinPara>{(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default LeftContentBlock;
