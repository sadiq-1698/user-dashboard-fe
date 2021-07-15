import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { LeftSection, SocialProfileButtons } from "../Login/Login";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { registerUser } from "../../api/user";
import { trimObjectValues } from "../../globals/helper";

import { RegisterFormValidation, RegisterationInitialValues } from "./helper";

import "../Login/styles.scss";

const Register = () => {
  const history = useHistory();

  const handleRegisterSubmit = async (values, actions) => {
    trimObjectValues(values);
    let response = await registerUser(values);
    if (response.status !== 200) {
      actions.setSubmitting(false);
      return;
    }
    if (response && response.status === 200) history.push("/login");
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
