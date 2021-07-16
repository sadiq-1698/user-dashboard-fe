import { useLocation } from "react-router-dom";

import LoginSection from "./sections/LoginSection";
import RegisterSection from "./sections/RegisterSection";

import { ENTRY_SCREENS } from "../../globals/constants";

import LeftSection from "./sections/LeftSection";

import "./styles.scss";

const Entry = () => {
  const routeLocation = useLocation();

  const getPageName = () => {
    let { page } = ENTRY_SCREENS.find(i => i.path === routeLocation.pathname);
    return page;
  };

  return (
    <div className="entry-page-layout">
      <LeftSection />

      <div className="entry-right">
        {getPageName() === "Login" && <LoginSection />}
        {getPageName() === "Register" && <RegisterSection />}
      </div>
    </div>
  );
};

export default Entry;
