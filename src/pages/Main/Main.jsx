import StatsCards from "./sections/StatsCards";
import ActivitiesBox from "./sections/ActivitiesBox";
import TopProductsBox from "./sections/TopProductsBox";
import ScheduleBox from "./sections/ScheduleBox";

import "./styles.scss";

const Main = () => {
  return (
    <div>
      <StatsCards />

      <ActivitiesBox />

      <div className="products-schedules-wrapper">
        <TopProductsBox />

        <ScheduleBox />
      </div>
    </div>
  );
};

export default Main;
