import { useAuth } from "../../contexts/authContext";

import { getProfileImage } from "../../globals/helper";

import NotifyIcon from "../../static/images/notify.svg";
import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";
import SearchField from "../SearchField/SearchField";

import "./styles.scss";

const Topbar = ({ screen }) => {
  const { getUser } = useAuth();

  console.log("Topbar", getUser);

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

        <div className="topbar-profile-pic">
          <CircleProfileAvatar img={getProfileImage(getUser)} width="30px" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
