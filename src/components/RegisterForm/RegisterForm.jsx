import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import "./styles.scss";

const RegisterForm = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <FieldWrapper label="Email address">
          <InputField />
        </FieldWrapper>
        <FieldWrapper label="Password">
          <InputField />
        </FieldWrapper>
      </div>
      <FieldWrapper label="Email address">
        <InputField />
      </FieldWrapper>
      <FieldWrapper label="Password">
        <InputField />
      </FieldWrapper>
      <FieldWrapper label="Confirm Password">
        <InputField />
      </FieldWrapper>
      <p className="forgot-pswd-text">
        I agree the&nbsp;
        <a href="/">terms and conditions</a>
      </p>
      <Button wide>Sign In</Button>
    </div>
  );
};

export default RegisterForm;
