import { ErrorSectionProps } from "./types";
import { ValidationList, ValidationMessage } from "./ErrorSection.styles";

const ErrorSection: React.FC<ErrorSectionProps> = ({ errors }) => {
  return (
    <>
      <ValidationList $show={(errors.length > 0).toString()}>
        {errors.map((error, index) => (
          <ValidationMessage key={index} $isFixed={error.isFixed}>
            {error.message}
          </ValidationMessage>
        ))}
      </ValidationList>
    </>
  );
};

export default ErrorSection;
