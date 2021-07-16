import "./styles.scss";

const FieldError = ({ children, success }) => {
  return (
    <span className={`field-error-message ${success ? "success" : ""}`}>
      {children}
    </span>
  );
};

export default FieldError;
