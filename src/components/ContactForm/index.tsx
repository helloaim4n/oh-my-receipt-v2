
import { Row, Col } from "antd";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types"; // Import types for props and validation
import { useForm } from "../../common/utils/useForm"; // Custom hook for form handling
import validate from "../../common/utils/validationRules"; // Validation rules for form fields
import { Button } from "../../common/Button"; // Custom button component
import Block from "../Block"; // Component for rendering a block of content
import Input from "../../common/Input"; // Custom input component
import TextArea from "../../common/TextArea"; // Custom text area component
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles"; // Styled components for Contact component
import { firestore } from "../../firebase";

const Contact = ({ title, content, id}: ContactProps) => {
  // Destructure props and initialize state using custom useForm hook and validation rules
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any;

  
  // Define a functional component named ValidationType to render error messages for each field
  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
