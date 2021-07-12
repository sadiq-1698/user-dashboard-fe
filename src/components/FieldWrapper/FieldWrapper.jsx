import PropTypes from "prop-types";
import "./styles.scss";

const FieldWrapper = ({ label, children }) => {
  return (
    <div className="field-wrapper">
      <p className="label">{label}</p>
      {children}
    </div>
  );
};

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FieldWrapper;
