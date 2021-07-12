import { LeftSection, SocialProfileButtons } from "../Login/Login";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "../Login/styles.scss";

const Register = () => {
  return (
    <div className="login-page-layout">
      <LeftSection />
      <div className="login-right">
        <div className="right-content">
          <h2 className="sign-in-header">Create an account</h2>
          <p className="sign-in-text">Create an account to use dashboard</p>
          <SocialProfileButtons />
          <div className="form-container">
            <RegisterForm />
          </div>
          <p className="account-exists-text">
            Already have an account?<a href="/login"> Sign in here </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
