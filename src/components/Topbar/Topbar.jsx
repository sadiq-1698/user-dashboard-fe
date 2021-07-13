import NotifyIcon from "../../static/images/notify.svg";
import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";
import "./styles.scss";
import SearchField from "../SearchField/SearchField";

const Topbar = ({ screen }) => {
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
          <CircleProfileAvatar
            img="https://images.unsplash.com/photo-1617885578851-d77b28ab005e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80"
            width="30px"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
