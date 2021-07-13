import PropTypes from "prop-types";
import SearchIcon from "../../static/images/search.svg";
import "./styles.scss";

const SearchField = ({ text, color, ...props }) => {
  return (
    <div className={`search-field ${color}`}>
      <input placeholder={text} {...props} />
      <img src={SearchIcon} alt="search" width="10px" height="10px" />
    </div>
  );
};

SearchField.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

SearchField.defaultProps = {
  color: "white"
};

export default SearchField;
