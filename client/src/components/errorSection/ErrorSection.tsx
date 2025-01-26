import { ValidationMessage } from "./ErrorSection.styles";
import { ErrorSectionProps } from "./types";

const ErrorSection: React.FC<ErrorSectionProps> = ({ error }) => {
  return <ValidationMessage>{error}</ValidationMessage>;
};

export default ErrorSection;
