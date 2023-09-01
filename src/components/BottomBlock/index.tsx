import { Row, Col } from "antd";
import { BottomBlockSection, Content, ContentWrapper, MinTitle, MinPara, ServiceWrapper } from "./styles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Slide } from "react-awesome-reveal";

interface BottomBlockProps {
  title: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  section: any;
  id: string;
}

const BottomBlock = ({
    title,
    content,
    section,
    id,
}: BottomBlockProps) => {

  return (
    <BottomBlockSection>
      <Slide direction="right">
          <Row justify="center" align="middle" id={id}>
            <ContentWrapper>
              <Col>
                <h6>{(title)}</h6>
                <Content>{(content)}</Content>
              </Col>
            </ContentWrapper>
            <ServiceWrapper> 
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
          </ServiceWrapper>
          </Row>
      </Slide>
    </BottomBlockSection>
  );
};

export default BottomBlock;
