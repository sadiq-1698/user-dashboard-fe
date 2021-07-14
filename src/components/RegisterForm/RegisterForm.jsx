import PropTypes from "prop-types";
import { Field } from "formik";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import FieldError from "../FieldError/FieldError";
import Button from "../Button/Button";

import "./styles.scss";

const RegisterForm = ({ formProps }) => {
  const { touched, errors, isSubmitting } = formProps;

  return (
    <div>
      <div className="name-fields">
        <div className="fname-field">
          <FieldWrapper label="First Name">
            <Field as={InputField} name="firstName" />
            {touched.firstName && errors.firstName && (
              <FieldError>{errors.firstName}</FieldError>
            )}
          </FieldWrapper>
        </div>

        <FieldWrapper label="Last Name">
          <Field as={InputField} name="lastName" />
          {touched.lastName && errors.lastName && (
            <FieldError>{errors.lastName}</FieldError>
          )}
        </FieldWrapper>
      </div>

      <FieldWrapper label="Email address">
        <Field as={InputField} name="email" />
        {touched.email && errors.email && (
          <FieldError>{errors.email}</FieldError>
        )}
      </FieldWrapper>

      <FieldWrapper label="Password">
        <Field as={InputField} name="password" type="password" />
        {touched.password && errors.password && (
          <FieldError>{errors.password}</FieldError>
        )}
      </FieldWrapper>

      <FieldWrapper label="Confirm Password">
        <Field as={InputField} name="confirm" type="password" />
        {touched.confirm && errors.confirm && (
          <FieldError>{errors.confirm}</FieldError>
        )}
      </FieldWrapper>

      <div className="last-field">
        <p className="forgot-pswd-text">
          <Field
            type="checkbox"
            className="terms-check"
            as="input"
            name="acceptTerms"
          />
          I agree the&nbsp;
          <a href="/">terms and conditions</a>
        </p>
        {touched.acceptTerms && errors.acceptTerms && (
          <FieldError>{errors.acceptTerms}</FieldError>
        )}
      </div>

      <Button wide loading={isSubmitting} type="submit">
        Sign Up
      </Button>
    </div>
  );
};

RegisterForm.propTypes = {
  formProps: PropTypes.object.isRequired
};

export default RegisterForm;
