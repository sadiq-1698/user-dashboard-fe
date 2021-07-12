import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleIcon from "../../static/images/google-icon.svg";
import AppleIcon from "../../static/images/apple-icon.svg";

import "./styles.scss";

const Login = () => {
  return (
    <div className="login-page-layout">
      <LeftSection />
      <div className="login-right">
        <div className="right-content">
          <h2 className="sign-in-header">Sign In</h2>
          <p className="sign-in-text">Sign in to your account</p>
          <SocialProfileButtons />
          <div className="form-container">
            <LoginForm />
          </div>
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
