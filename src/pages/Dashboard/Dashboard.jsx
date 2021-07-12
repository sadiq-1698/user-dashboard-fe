import { useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import Users from "../Users/Users";
import Settings from "../Settings/Settings";

import { USER_SCREENS, STATS_CARD } from "../../globals/constants";

import "./styles.scss";
import StatsCard from "../../components/StatsCard/StatsCard";

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
        {getPageName() === "Dashboard" && <Main />}
        {getPageName() === "Users" && <Users />}
        {getPageName() === "Settings" && <Settings />}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <div className="stats-card-container">
        {STATS_CARD.map((val, i) => {
          return (
            <StatsCard
              amount={val.amount}
              color={val.color}
              icon={val.icon}
              stat={val.stat}
              key={val.stat}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
