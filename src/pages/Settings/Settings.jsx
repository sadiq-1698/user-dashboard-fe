import { useAuth } from "../../contexts/authContext";

import ProfileBox from "./sections/ProfileBox";
import AccountBox from "./sections/AccountBox";
import SecurityBox from "./sections/SecurityBox";
import DangerBox from "./sections/DangerBox";

import "./styles.scss";

const Settings = () => {
  const { getUser, setUser, logout } = useAuth();

  return (
    <div className="settings-layout">
      <div className="left">
        <ProfileBox header="Profile" getUser={getUser} setUser={setUser} />
      </div>
      <div className="right">
        <AccountBox header="Account" getUser={getUser} />
        <SecurityBox header="Security" />
        <DangerBox header="Danger Zone" logout={logout} getUser={getUser} />
      </div>
    </div>
  );
};

export default Settings;
