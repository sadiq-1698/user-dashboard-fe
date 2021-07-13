import { useState } from "react";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import "./styles.scss";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
  };

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
      <Button wide loading={loading} onClick={handleLoad}>
        Sign In
      </Button>
    </div>
  );
};

export default LoginForm;
