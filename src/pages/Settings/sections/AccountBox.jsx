import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";

import { changeUserPassword } from "../../../api/user";

import { getResponseData, trimObjectValues } from "../../../globals/helper";

import FieldError from "../../../components/FieldError/FieldError";
import ChangePasswordForm from "../../../components/ChangePasswordForm/ChangePasswordForm";

import {
  ChangePasswordInitialValues,
  ChangePasswordFormValidation
} from "../helper";

import "../styles.scss";

const AccountBox = ({ header, getUser }) => {
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const userInfo = getUser();

  const handleSubmitChangePassword = async (values, actions) => {
    trimObjectValues(values);
    let response = await changeUserPassword(values, userInfo.authToken);
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
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <div className="settings-box account">
      <h4>{header}</h4>

      <Formik
        initialValues={ChangePasswordInitialValues(userInfo.email)}
        validationSchema={ChangePasswordFormValidation}
        onSubmit={handleSubmitChangePassword}
      >
        {formikProps => (
          <Form>
            <ChangePasswordForm formProps={formikProps} />
          </Form>
        )}
      </Formik>
      {errMsg.length > 0 && <FieldError success={success}>{errMsg}</FieldError>}
    </div>
  );
};

AccountBox.propTypes = {
  header: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired
};

export default AccountBox;
