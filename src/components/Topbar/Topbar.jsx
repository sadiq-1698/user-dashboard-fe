import PropTypes from "prop-types";

import NotifyIcon from "../../static/images/notify.svg";

import { useAuth } from "../../contexts/authContext";

import { getProfileImage } from "../../globals/helper";

import useComponentVisible from "../../hooks/useComponentVisible";

import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";
import SearchField from "../SearchField/SearchField";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

import "./styles.scss";

const Topbar = ({ screen }) => {
  const { ref, isComponentVisible, toggleRef } = useComponentVisible();
  const { getUser } = useAuth();

  return (
    <div className="topbar">
      <div className="topbar-screen-name">
        <h2>{screen}</h2>
      </div>

      <div className="topbar-profile-section">
        <div className="topbar-search">
          <SearchField text="Search.." />
        </div>

        <div className="topbar-notify-icon">
          <img src={NotifyIcon} alt="notification" width="18px" height="20px" />
        </div>

        <button className="topbar-profile-pic" onClick={toggleRef} ref={ref}>
          <CircleProfileAvatar img={getProfileImage(getUser)} width="30px" />
          {isComponentVisible && <ProfileDropdown />}
        </button>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  screen: PropTypes.string.isRequired
};

export default Topbar;
