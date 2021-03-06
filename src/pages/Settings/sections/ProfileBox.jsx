import PropTypes from "prop-types";
import { useState } from "react";
import { Formik, Form } from "formik";

import { updateUserProfile } from "../../../api/user";

import { getResponseData } from "../../../globals/helper";

import FieldError from "../../../components/FieldError/FieldError";
import UpdateProfileForm from "../../../components/UpdateProfileForm/UpdateProfileForm";

import {
  UpdateProfileInitialValues,
  UpdateProfileFormValidation
} from "../helper";

import "../styles.scss";

const ProfileBox = ({ header, getUser, setUser }) => {
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const userInfo = getUser();

  const appendValuesToFormData = (values, formData) => {
    Object.entries(values).forEach(([key, value]) => {
      if (value.toString().trim().length > 0) {
        formData.append(key, value);
      }
    });
  };

  const handleSubmitUpdateProfile = async (values, actions) => {
    let formData = new FormData();
    appendValuesToFormData(values, formData);
    const response = await updateUserProfile(formData, userInfo.authToken);
    // client error
    if (response && response.error) {
      setErrMsg(response.error);
      actions.setSubmitting(false);
      return;
    }
    //server error
    const responseData = getResponseData(response);
    if (responseData.statusCode !== 200) {
      setSuccess(false);
      setErrMsg(responseData.message);
      actions.setSubmitting(false);
      return;
    }
    //success
    setErrMsg(responseData.message);
    setSuccess(true);
    setUser(responseData.data);
    actions.setSubmitting(false);
  };

  return (
    <div className="settings-box profile">
      <h4>{header}</h4>

      <Formik
        initialValues={UpdateProfileInitialValues(userInfo)}
        validationSchema={UpdateProfileFormValidation}
        onSubmit={handleSubmitUpdateProfile}
      >
        {formikProps => (
          <Form>
            <UpdateProfileForm formProps={formikProps} getUser={getUser} />
          </Form>
        )}
      </Formik>
      {errMsg.length > 0 && <FieldError success={success}>{errMsg}</FieldError>}
    </div>
  );
};

ProfileBox.propTypes = {
  header: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
};

export default ProfileBox;
