// Import necessary functions and components from libraries and local files
import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon"; // Custom SVG icon component
import { ContentBlockProps } from "../types"; // Import types for props
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Fade } from "react-awesome-reveal"; // Component for animating content
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles"; // Styled components for LeftContentBlock

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      {/* Use Fade component to animate content in from left */}
      <Fade direction="left">
        {/* Use Ant Design's Row and Col components to layout the LeftContentBlock */}
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            {/* Render a custom SVG icon component */}
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            {/* Use ContentWrapper styled component to wrap text content */}
            <ContentWrapper>
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
              {/* Use ServiceWrapper styled component to wrap service section */}
              <ServiceWrapper>
                {/* Use Ant Design's Row component to layout service section */}
                <Row justify="space-between">
                  {/* Map over each item in the section array to render a service block */}
                  {typeof section === "object" &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          {/* Render a custom SVG icon component for the service */}
                          <SvgIcon src={item.icon} width="60px" height="60px" />
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

// Export LeftContentBlock component as default export with translation functionality provided by withTranslation()
export default LeftContentBlock;
