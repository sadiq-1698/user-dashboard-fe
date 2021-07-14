import PropTypes from "prop-types";
import { Field } from "formik";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import FieldError from "../FieldError/FieldError";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import "./styles.scss";

const LoginForm = ({ formProps }) => {
  const { errors, touched, isSubmitting } = formProps;

  return (
    <div className={`${isSubmitting} ? 'form-loading' : ''`}>
      <FieldWrapper label="Email address">
        <Field as={InputField} name="email" />
        {touched.email && errors.email && (
          <FieldError>{errors.email}</FieldError>
        )}
      </FieldWrapper>

      <FieldWrapper label="Password">
        <Field as={InputField} name="password" type="password" iconSuffix />
        {touched.password && errors.password && (
          <FieldError>{errors.password}</FieldError>
        )}
      </FieldWrapper>

      <p className="forgot-pswd-text last-field">
        <a href="/">Forgot password?</a>
      </p>

      <Button type="submit" wide loading={isSubmitting}>
        Sign In
      </Button>
    </div>
  );
};

LoginForm.propTypes = {
  formProps: PropTypes.object.isRequired
};

export default LoginForm;
