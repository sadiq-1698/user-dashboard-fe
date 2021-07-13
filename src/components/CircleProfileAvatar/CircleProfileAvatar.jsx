import PropTypes from "prop-types";
import "./styles.scss";

const CircleProfileAvatar = ({ img, width }) => {
  return (
    <div className="prof-img" style={{ width: width, height: width }}>
      <img src={img} alt="profile" width="100%" height="100%" />
    </div>
  );
};

CircleProfileAvatar.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default CircleProfileAvatar;
