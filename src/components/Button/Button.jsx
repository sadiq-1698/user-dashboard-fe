import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ danger, children, wide, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${!danger ? "primary" : ""} 
      ${danger ? "danger" : ""} ${wide ? "wide" : ""}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  danger: PropTypes.bool,
  wide: PropTypes.bool,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  danger: false,
  wide: false
};

export default Button;
