import StatsCard from "../../components/StatsCard/StatsCard";
import { ScheduleBox } from "../Schedules/Schedules";
import { STATS_CARD } from "../../globals/constants";

import "./styles.scss";

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

      <TopProductsBox />

      <ScheduleBox />
    </div>
  );
};

const TopProductsBox = () => {
  return (
    <div className="top-products-box">
      <div className="top-products-box-head">
        <h3>Top Products</h3>
        <div className="right">
          <p>May - June 2021&nbsp;</p>
          <div className="chevron-down">&gt;</div>
        </div>
      </div>

      <div className="top-products-box-body">
        <div className="pie-chart"></div>
        <div className="pie-stats"></div>
      </div>
    </div>
  );
};

export default Main;
