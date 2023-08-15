// Importing necessary components and functions from libraries and local files
import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon";
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
} from "./styles";

// Defining a React component called RightBlock that takes in several props defined by the ContentBlockProps type
const RightBlock = ({
  title,
  content,
  button,
  icon,
  id,
}: ContentBlockProps) => {

  // Defining a function to scroll to a specific element on the page with a smooth animation
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Returning a JSX expression that creates a RightBlockContainer styled component with a right-fading animation. 
  // Inside this container, there is a grid layout created using Row and Col components. 
  // The left column contains a ContentWrapper styled component that wraps text content, including a title (h6 element), 
    // main content (Content styled component), and a button section wrapped in a ButtonWrapper styled component. 
  // The button section is itself a grid layout created using an Ant Design Row component and mapped over an array of items passed in through the button prop. 
  // Each item is rendered as a Button component containing a title and an onClick event that triggers the scrollTo function. 
  //The right column contains an SVG icon rendered using the SvgIcon component.
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
              <ButtonWrapper>
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
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

// Exporting the RightBlock component with translation functionality provided by withTranslation()
export default RightBlock;
