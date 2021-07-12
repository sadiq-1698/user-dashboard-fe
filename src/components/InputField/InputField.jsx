import PropTypes from "prop-types";
import "./styles.scss";

const InputField = ({ iconSuffix, ...props }) => {
  if (iconSuffix) {
    return (
      <div className="input-suffix-icon">
        <input {...props} className="input" />
        <div class="icon-container"></div>
      </div>
    );
  }
  return <input {...props} className="input" />;
};

InputField.propTypes = {
  iconSuffix: PropTypes.bool
};

InputField.defaultProps = {
  iconSuffix: false
};

export default InputField;
