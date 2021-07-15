import { Field } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";

import { getProfileImage } from "../../globals/helper";

import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import FieldError from "../FieldError/FieldError";
import Button from "../Button/Button";

import "./styles.scss";

const UpdateProfileForm = ({ formProps, getUser }) => {
  const [previewImg, setPreviewImg] = useState(getProfileImage(getUser));

  const { touched, errors, isSubmitting, setFieldValue } = formProps;

  const handleFileChange = e => {
    setFieldValue("profilePhoto", e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="profile-box-layout">
      <div className="left-prof">
        <CircleProfileAvatar img={previewImg} width="100px" />

        <label htmlFor="file-upload" className="change-btn">
          Change
        </label>
        <input
          type="file"
          id="file-upload"
          name="profilePhoto"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <div className="right-prof">
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

        <FieldWrapper label="Date of birth">
          <InputField />
        </FieldWrapper>

        <FieldWrapper label="Phone Number">
          <Field as={InputField} name="phone" type="number" />
          {touched.phone && errors.phone && (
            <FieldError>{errors.phone}</FieldError>
          )}
        </FieldWrapper>

        <FieldWrapper label="Address">
          <Field as={InputField} name="address" />
          {touched.address && errors.address && (
            <FieldError>{errors.address}</FieldError>
          )}
        </FieldWrapper>

        <div className="save-btn">
          <Button wide loading={isSubmitting} type="submit">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

UpdateProfileForm.propTypes = {
  formikProps: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};

export default UpdateProfileForm;
