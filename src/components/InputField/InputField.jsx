import PropTypes from "prop-types";
import { useState } from "react";
import ShowIcon from "../../static/images/show.svg";
import HideIcon from "../../static/images/hide.svg";

import "./styles.scss";

const InputField = ({ iconSuffix, ...props }) => {
  const [show, setShow] = useState(false);

  if (iconSuffix) {
    return (
      <div className="input-suffix-icon">
        <input {...props} type={show ? "text" : "password"} />
        <button
          class="icon-container"
          type="button"
          onClick={() => setShow(s => !s)}
        >
          <img
            src={show ? HideIcon : ShowIcon}
            alt="eye"
            width="20px"
            height="17px"
          />
        </button>
      </div>
    );
  }
  return <input {...props} className="input" />;
};

InputField.propTypes = {
  iconSuffix: PropTypes.bool,
  show: PropTypes.bool,
  setShow: PropTypes.func
};

InputField.defaultProps = {
  iconSuffix: false
};

export default InputField;
