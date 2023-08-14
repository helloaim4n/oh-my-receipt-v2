// Import necessary functions and components from libraries and local files
import { Container, TextWrapper, Content } from "./styles";

// Define a Props interface to type-check props passed to the Block component
interface Props {
  title: string;
  content: string;
}

// Define a functional component named Block that takes in props of type Props
const Block = ({ title, content}: Props) => {
  return (
    <Container>
      <h6>{(title)}</h6>
      <TextWrapper>
        <Content>{(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

// Export Block component as default export with translation functionality provided by withTranslation()
export default Block;
