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

      <ScheduleBox />
    </div>
  );
};

export default Main;
