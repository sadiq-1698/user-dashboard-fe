import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ danger, wide, loading, children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${!danger ? "primary" : ""} 
      ${danger ? "danger" : ""} ${wide ? "wide" : ""} ${
        loading ? "loading" : ""
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  danger: PropTypes.bool,
  wide: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  danger: false,
  wide: false,
  loading: false
};

export default Button;
