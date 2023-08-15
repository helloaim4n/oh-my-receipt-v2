// Import necessary functions and components from libraries and local files
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
      {/* Use Ant Design's Row and Col components to layout the Contact component */}
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            {/* Render a Block component with translated title and content */}
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            {/* Use FormGroup styled component to wrap form fields */}
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                {/* Render a custom Input component for name field */}
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {/* Render error message if name field has an error */}
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                {/* Render a custom Input component for email field */}
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                {/* Render error message if email field has an error */}
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                {/* Render a custom TextArea component for message field */}
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                {/* Render error message if message field has an error */}
                <ValidationType type="message" />
              </Col>
              {/* Render a custom Button component for submitting the form */}
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

// Export Contact component as default export with translation functionality provided by withTranslation()
export default Contact;
