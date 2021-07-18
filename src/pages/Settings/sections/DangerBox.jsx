import PropTypes from "prop-types";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { deleteMyAccount } from "../../../api/user";

import { getResponseData } from "../../../globals/helper";

import Button from "../../../components/Button/Button";
import FieldError from "../../../components/FieldError/FieldError";

import "../styles.scss";

const DangerBox = ({ header, logout, getUser }) => {
  const history = useHistory();

  const { authToken } = getUser();

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleDeleteUser = async () => {
    setLoading(true);
    const response = await deleteMyAccount(authToken);
    // client error
    if (response && response.error) {
      setErrMsg(response.error);
      setLoading(false);
      return;
    }
    //server error
    const responseData = getResponseData(response);
    if (responseData.statusCode !== 200) {
      setErrMsg(responseData.message);
      setLoading(false);
      return;
    }
    //success
    logout();
    history.replace("/");
  };

  return (
    <div className="settings-box danger">
      <h4 className="danger">{header}</h4>
      <Button danger wide loading={loading} onClick={handleDeleteUser}>
        Delete My Account
      </Button>
      {errMsg && errMsg.length > 0 && <FieldError>{errMsg}</FieldError>}
    </div>
  );
};

DangerBox.propTypes = {
  header: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired
};

export default DangerBox;
