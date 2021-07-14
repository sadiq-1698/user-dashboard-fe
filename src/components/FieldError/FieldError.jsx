import "./styles.scss";

const FieldError = ({ children }) => {
  return <span className="field-error-message">{children}</span>;
};

export default FieldError;
