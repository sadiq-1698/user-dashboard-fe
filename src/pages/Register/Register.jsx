import { Formik, Form } from "formik";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { registerUser } from "../../api/user";

import { trimObjectValues, getResponseData } from "../../globals/helper";

import { LeftSection, SocialProfileButtons } from "../Login/Login";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import FieldError from "../../components/FieldError/FieldError";

import { RegisterFormValidation, RegisterationInitialValues } from "./helper";

import "../Login/styles.scss";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const handleRegisterSubmit = async (values, actions) => {
    trimObjectValues(values);
    let response = await registerUser(values);
    const responseData = getResponseData(response);
    if (responseData.statusCode !== 200) {
      setErrorMsg(responseData.message);
      actions.setSubmitting(false);
      return;
    }
    history.push("/login");
  };

  return (
    <div className="login-page-layout">
      <LeftSection />

      <div className="login-right">
        <div className="right-content">
          <h2 className="sign-in-header">Create an account</h2>

          <p className="sign-in-text">Create an account to use dashboard</p>

          <SocialProfileButtons />

          <Formik
            initialValues={RegisterationInitialValues}
            validationSchema={RegisterFormValidation}
            onSubmit={handleRegisterSubmit}
          >
            {formikProps => (
              <Form>
                <div className="form-container">
                  <RegisterForm formProps={formikProps} />
                  {errorMsg.length > 0 && <FieldError>{errorMsg}</FieldError>}
                </div>
              </Form>
            )}
          </Formik>

          <p className="account-exists-text">
            Already have an account?<a href="/login"> Sign in here </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
