import { Field } from "formik";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import FieldError from "../FieldError/FieldError";
import Button from "../Button/Button";

import "./styles.scss";

const ChangePasswordForm = ({ formProps }) => {
  const { touched, errors, isSubmitting } = formProps;

  return (
    <>
      <FieldWrapper label="Email address">
        <Field as={InputField} name="email" />
        {touched.email && errors.email && (
          <FieldError>{errors.email}</FieldError>
        )}
      </FieldWrapper>

      <FieldWrapper label="Current Password">
        <Field
          as={InputField}
          name="currentPassword"
          type="password"
          iconSuffix
        />
        {touched.password && errors.password && (
          <FieldError>{errors.password}</FieldError>
        )}
      </FieldWrapper>

      <FieldWrapper label="New Password">
        <Field as={InputField} name="newPassword" type="password" iconSuffix />
        {touched.password && errors.password && (
          <FieldError>{errors.password}</FieldError>
        )}
      </FieldWrapper>

      <div className="save-btn">
        <Button wide loading={isSubmitting} type="submit">
          Save
        </Button>
      </div>
    </>
  );
};

export default ChangePasswordForm;
