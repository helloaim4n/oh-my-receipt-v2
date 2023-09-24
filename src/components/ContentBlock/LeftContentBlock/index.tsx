// Import necessary functions and components from libraries and local files
import { Row, Col } from "antd";
// import { SvgIcon } from "../../../common/SvgIcon"; 
import { ContentBlockProps } from "../types"; 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Fade } from "react-awesome-reveal"; 
import {
  LeftContentSection,
  ContentTitle,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles"; 
import { SvgIcon } from "../../../common/SvgIcon";

const LeftContentBlock = ({
  title,
  content,
  section,
  icon,
  id,
}: ContentBlockProps) => {
  
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="center" align="middle" id={id}>
          <Col lg={8} md={8} sm={9} xs={15}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <ContentWrapper>
          <Col lg={20}>
              <ContentTitle>{(title)}</ContentTitle>
              <Content>{(content)}</Content>
              </Col>
              </ContentWrapper>
              <ServiceWrapper>
                <Row justify="center">
                  {typeof section === "object" &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={10} style={{ margin: "14px"}}>
                          <MinTitle>{(item.title)}</MinTitle>
                          <MinPara>{(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default LeftContentBlock;
