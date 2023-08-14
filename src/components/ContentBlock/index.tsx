// Importing LeftContentBlock and RightContentBlock components as well as the ContentBlockProps type from local files
import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types.ts";

// Defining a React component called ContentBlock that takes in props defined by the ContentBlockProps type. 
// This component conditionally renders either a LeftContentBlock or a RightContentBlock based on the value of the "type" prop passed in through props. 
// If it is "left", it returns a LeftContentBlock component with all the props passed in using spread syntax. 
// If it is "right", it returns a RightContentBlock component with all the props passed in using spread syntax. 
// If neither of these conditions are met, it returns null.
const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

// Exporting the ContentBlock component
export default ContentBlock;
