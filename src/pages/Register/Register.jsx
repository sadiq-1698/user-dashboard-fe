import { LeftSection, SocialProfileButtons } from "../Login/Login";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "../Login/styles.scss";
import { Formik, Form } from "formik";
import { RegisterFormValidation, RegisterationInitialValues } from "./helper";

const Register = () => {
  const handleRegisterSubmit = (values, actions) => {
    Object.keys(values).map(
      k =>
        (values[k] =
          typeof values[k] == "string" ? values[k].trim() : values[k])
    );
    console.log(values);
    actions.setSubmitting(false);
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
