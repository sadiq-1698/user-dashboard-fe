import GoogleLogin from "react-google-login";

import GoogleIcon from "../../../static/images/google-icon.svg";
import AppleIcon from "../../../static/images/apple-icon.svg";

import "../styles.scss";

const SocialProfileButtons = () => {
  return (
    <div className="social-profile-signin">
      <GoogleLogin
        clientId="774362402204fitaaid1ai2hb1o0v51r3ejs79up80h9.apps.googleusercontent.com"
        render={renderProps => (
          <button onClick={renderProps.onClick}>
            <div className="btn-content">
              <img src={GoogleIcon} alt="google" height="14px" width="14px" />
              <p>Sign in with Google</p>
            </div>
          </button>
        )}
        onSuccess={e => console.log(e)}
        onFailure={e => console.log(e)}
      />

      <button>
        <div className="btn-content">
          <img src={AppleIcon} alt="apple" height="14px" width="14px" />
          <p>Sign in with Apple</p>
        </div>
      </button>
    </div>
  );
};

export default SocialProfileButtons;
