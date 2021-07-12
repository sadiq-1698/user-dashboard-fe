import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import "./styles.scss";

const RegisterForm = () => {
  return (
    <div>
      <div className="name-fields">
        <div className="fname-field">
          <FieldWrapper label="First name">
            <InputField />
          </FieldWrapper>
        </div>
        <FieldWrapper label="Last name">
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
        <input type="checkbox" className="terms-check" />I agree the&nbsp;
        <a href="/">terms and conditions</a>
      </p>
      <Button wide>Sign In</Button>
    </div>
  );
};

export default RegisterForm;
