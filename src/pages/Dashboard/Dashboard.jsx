import { useLocation, Redirect } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import StatsCard from "../../components/StatsCard/StatsCard";

import Users from "../Users/Users";
import Settings from "../Settings/Settings";
import Schedules from "../Schedules/Schedules";
import Main from "../Main/Main";

import { USER_SCREENS, STATS_CARD } from "../../globals/constants";

import "./styles.scss";

const Dashboard = () => {
  const routeLocation = useLocation();

  const getPageName = () => {
    let { page } = USER_SCREENS.find(
      i => i.path === routeLocation.pathname
    ) || { page: "" };

    return page;
  };

  return (
    <div className="user-pages-layout">
      <div className="sidebar-wrapper">
        <Sidebar currentScreen={getPageName()} screens={USER_SCREENS} />
      </div>

      <div className="content">
        <Topbar screen={getPageName()} />
        {getPageName() === "Dashboard" && <Main />}
        {getPageName() === "Transactions" && <Transaction />}
        {getPageName() === "Users" && <Users />}
        {getPageName() === "Settings" && <Settings />}
        {getPageName() === "Schedules" && <Schedules />}
        {getPageName() === "" && <Redirect exact to="/404" />}
      </div>
    </div>
  );
};

const Transaction = () => {
  const { stat, amount, color, icon } = STATS_CARD.find(
    i => i.stat === "Total Transactions"
  );

  return <StatsCard stat={stat} amount={amount} color={color} icon={icon} />;
};

export default Dashboard;
