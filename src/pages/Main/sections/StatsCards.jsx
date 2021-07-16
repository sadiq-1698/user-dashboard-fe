import { STATS_CARD } from "../../../globals/constants";

import StatsCard from "../../../components/StatsCard/StatsCard";

import "../styles.scss";

const StatsCards = () => {
  return (
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
  );
};

export default StatsCards;
