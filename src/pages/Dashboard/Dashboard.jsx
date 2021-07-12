import { useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import { USER_SCREENS } from "../../globals/constants";

import "./styles.scss";
import Users from "../Users/Users";

const Dashboard = () => {
  const routeLocation = useLocation();

  const getPageName = () => {
    let { page } = USER_SCREENS.find(i => i.path === routeLocation.pathname);
    return page;
  };

  return (
    <div className="user-pages-layout">
      <Sidebar screens={USER_SCREENS} currentScreen={getPageName()} />
      <div className="content">
        <Topbar screen={getPageName()} />
        {getPageName() === "Users" && <Users />}
      </div>
    </div>
  );
};

export default Dashboard;
