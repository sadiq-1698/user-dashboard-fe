import { Field } from "formik";
import PropTypes from "prop-types";

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
        {touched.currentPassword && errors.currentPassword && (
          <FieldError>{errors.currentPassword}</FieldError>
        )}
      </FieldWrapper>

      <FieldWrapper label="New Password">
        <Field as={InputField} name="newPassword" type="password" iconSuffix />
        {touched.newPassword && errors.newPassword && (
          <FieldError>{errors.newPassword}</FieldError>
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

ChangePasswordForm.propTypes = {
  formikProps: PropTypes.object.isRequired
};

export default ChangePasswordForm;
