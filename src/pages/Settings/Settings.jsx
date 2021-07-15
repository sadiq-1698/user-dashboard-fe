import { useState } from "react";
import { Formik, Form } from "formik";

import { changeUserPassword, updateUserProfile } from "../../api/user";

import { trimObjectValues } from "../../globals/helper";

import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";

import Button from "../../components/Button/Button";

import { useAuth } from "../../contexts/authContext";

import {
  ChangePasswordInitialValues,
  ChangePasswordFormValidation,
  UpdateProfileInitialValues,
  UpdateProfileFormValidation
} from "./helper";
import "./styles.scss";

const Settings = () => {
  const { getUser, setUser } = useAuth();

  return (
    <div className="settings-layout">
      <div className="left">
        <ProfileBox header="Profile" getUser={getUser} setUser={setUser} />
      </div>
      <div className="right">
        <AccountBox header="Account" getUser={getUser} />
        <SecurityBox header="Security" />
        <DangerBox header="Danger Zone" />
      </div>
    </div>
  );
};

const ProfileBox = ({ header, getUser, setUser }) => {
  const userInfo = getUser();

  const handleSubmitUpdateProfile = async (values, actions) => {
    let formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value.toString().trim().length > 0) {
        formData.append(key, value);
      }
    });
    const response = await updateUserProfile(formData, userInfo.authToken);
    if (response && response.status === 200) {
      let { data } = response;
      setUser(data);
    }
    actions.setSubmitting(false);
  };

  return (
    <div className="settings-box">
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
    </div>
  );
};

const AccountBox = ({ header, getUser }) => {
  const userInfo = getUser();

  const handleSubmitChangePassword = async (values, actions) => {
    trimObjectValues(values);
    let response = await changeUserPassword(values, userInfo.authToken);
    if (response.status === 200) actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <div className="settings-box">
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
    </div>
  );
};

const SecurityBox = ({ header }) => {
  const [enable, setEnable] = useState(false);
  const handleOnClick = () => {
    setEnable(s => !s);
  };

  return (
    <div className="settings-box">
      <h4>{header}</h4>
      <div className="two-step-verify" onClick={handleOnClick}>
        <p>2-Step Verification</p>
        <div className={`enable-toggle ${enable ? "enabled" : ""}`}>
          <div className="toggle-ball"></div>
        </div>
      </div>
    </div>
  );
};

const DangerBox = ({ header }) => {
  return (
    <div className="settings-box">
      <h4 className="danger">{header}</h4>
      <Button danger wide>
        Delete My Account
      </Button>
    </div>
  );
};

export default Settings;
