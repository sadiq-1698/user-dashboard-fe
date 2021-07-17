import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "react-google-login";

import { getGoogleBasicProfileObj } from "../helper";

import { registerWithGoogle, loginWithGoogle } from "../../../api/user";

import GoogleIcon from "../../../static/images/google-icon.svg";
import AppleIcon from "../../../static/images/apple-icon.svg";

import FieldError from "../../../components/FieldError/FieldError";

import "../styles.scss";

const SocialProfileButtons = ({ register, setUser, logout }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleRegisterWithGoogle = async userObj => {
    setLoading(true);
    const googleRegisterResponse = await registerWithGoogle(userObj);
    const { statusCode, message } = googleRegisterResponse?.data;
    if (statusCode !== 200) {
      setErrorMsg(message);
      setLoading(false);
      return;
    }
    setLoading(false);
    history.push("/login");
  };

  const handleLoginWithGoogle = async userObj => {
    setLoading(true);
    const googleLoginResponse = await loginWithGoogle(userObj);
    const { statusCode, data, message } = googleLoginResponse?.data;
    if (statusCode !== 200) {
      setErrorMsg(message);
      setLoading(false);
      return;
    }
    logout();
    setUser(data);
    history.length > 0 ? history.replace("/") : history.push("/");
  };

  const handleGoogleAuth = async e => {
    const userObj = await e.getBasicProfile();
    const formattedUserObj = getGoogleBasicProfileObj(userObj);
    if (register) {
      handleRegisterWithGoogle(formattedUserObj);
    } else {
      handleLoginWithGoogle(formattedUserObj);
    }
  };

  return (
    <>
      {errorMsg.length > 0 && <FieldError>{errorMsg}</FieldError>}
      <div className="social-profile-signin">
        {loading && <div className="loader-overlay"></div>}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <button onClick={renderProps.onClick}>
              <div className="btn-content">
                <img src={GoogleIcon} alt="google" height="14px" width="14px" />
                <p>Sign {register ? "up" : "in"} with Google</p>
              </div>
            </button>
          )}
          onSuccess={e => handleGoogleAuth(e)}
          onFailure={e => handleGoogleAuth(e)}
        />

        <button>
          <div className="btn-content">
            <img src={AppleIcon} alt="apple" height="14px" width="14px" />
            <p>Sign {register ? "up" : "in"} with Apple</p>
          </div>
        </button>
      </div>
    </>
  );
};

SocialProfileButtons.propTypes = {
  register: PropTypes.bool,
  setUser: PropTypes.func,
  logout: PropTypes.func
};

SocialProfileButtons.defaultProps = {
  register: false,
  setUser: null,
  logout: null
};

export default SocialProfileButtons;
