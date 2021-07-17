import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

import { getResponseData, trimObjectValues } from "../../../globals/helper";

import { loginUser } from "../../../api/user";

import { useAuth } from "../../../contexts/authContext";

import LoginForm from "../../../components/LoginForm/LoginForm";
import FieldError from "../../../components/FieldError/FieldError";
import SocialProfileButtons from "./SocialProfileButtons";

import { LoginInitialValues, LoginFormValidation } from "../helper";

import "../styles.scss";

const LoginSection = () => {
  const { setUser, logout } = useAuth();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginSubmit = async (values, actions) => {
    trimObjectValues(values);
    let response = await loginUser(values);
    const responseData = getResponseData(response);
    if (responseData.statusCode !== 200) {
      setErrorMsg(responseData.message);
      actions.setSubmitting(false);
      return;
    }
    logout();
    setUser(responseData.data);
    history.length > 0 ? history.replace("/") : history.push("/");
  };

  return (
    <div className="right-content">
      <h2 className="sign-in-header">Sign In</h2>

      <p className="sign-in-text">Sign in to your account</p>

      <SocialProfileButtons logout={logout} setUser={setUser} />

      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LoginFormValidation}
        onSubmit={handleLoginSubmit}
      >
        {formikProps => (
          <Form>
            <div className="form-container">
              <LoginForm formProps={formikProps} />
              {errorMsg.length > 0 && <FieldError>{errorMsg}</FieldError>}
            </div>
          </Form>
        )}
      </Formik>

      <p className="account-exists-text">
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginSection;
