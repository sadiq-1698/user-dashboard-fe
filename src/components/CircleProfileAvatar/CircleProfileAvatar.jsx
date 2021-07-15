import PropTypes from "prop-types";
import DefaultProfilePic from "../../static/images/noProfilePic.svg";
import "./styles.scss";

const CircleProfileAvatar = ({ img, width }) => {
  return (
    <div className="prof-img" style={{ width: width, height: width }}>
      <img
        onError={e => (e.target.src = DefaultProfilePic)}
        src={img}
        alt="profile"
        width="100%"
        height="100%"
      />
    </div>
  );
};

CircleProfileAvatar.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default CircleProfileAvatar;
