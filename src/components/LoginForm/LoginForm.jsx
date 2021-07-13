import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import "./styles.scss";

const LoginForm = () => {
  return (
    <div>
      <FieldWrapper label="Email address">
        <InputField />
      </FieldWrapper>
      <FieldWrapper label="Password">
        <InputField />
      </FieldWrapper>
      <p className="forgot-pswd-text">
        <a href="/">Forgot password?</a>
      </p>
      <Button wide>Sign In</Button>
    </div>
  );
};

export default LoginForm;
