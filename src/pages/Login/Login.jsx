import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleIcon from "../../static/images/google-icon.svg";
import AppleIcon from "../../static/images/apple-icon.svg";

import { trimObjectValues } from "../../globals/helper";

import { useAuth } from "../../contexts/authContext";

import { loginUser } from "../../api/user";

import { LoginFormValidation, LoginInitialValues } from "./helper";

import "./styles.scss";

const Login = () => {
  const history = useHistory();
  const { setUser, logout } = useAuth();

  const handleLoginSubmit = async (values, actions) => {
    trimObjectValues(values);
    let response = await loginUser(values);
    if (response.status !== 200) {
      actions.setSubmitting(false);
      return;
    }
    if (response && response.status === 200) {
      logout(); // clear user info from local storage
      let { data } = response;
      setUser(data);
      history.length > 0 ? history.replace("/") : history.push("/");
    }
  };

  return (
    <div className="login-page-layout">
      <LeftSection />

      <div className="login-right">
        <div className="right-content">
          <h2 className="sign-in-header">Sign In</h2>

          <p className="sign-in-text">Sign in to your account</p>

          <SocialProfileButtons />

          <Formik
            initialValues={LoginInitialValues}
            validationSchema={LoginFormValidation}
            onSubmit={handleLoginSubmit}
          >
            {formikProps => (
              <Form>
                <div className="form-container">
                  <LoginForm formProps={formikProps} />
                </div>
              </Form>
            )}
          </Formik>

          <p className="account-exists-text">
            Don’t have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export const LeftSection = () => {
  return (
    <div className="login-left">
      <h1>Dash.</h1>
    </div>
  );
};

export const SocialProfileButtons = () => {
  return (
    <div className="social-profile-signin">
      <button>
        <div className="btn-content">
          <img src={GoogleIcon} alt="google" height="14px" width="14px" />
          <p>Sign in with Google</p>
        </div>
      </button>

      <button>
        <div className="btn-content">
          <img src={AppleIcon} alt="apple" height="14px" width="14px" />
          <p>Sign in with Apple</p>
        </div>
      </button>
    </div>
  );
};

export default Login;
