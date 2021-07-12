import PropTypes from "prop-types";
import "./styles.scss";

const StatsCard = ({ color, icon, stat, amount }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-icon-container">
        <img src={icon} alt="stat-icon" width="24" height="24" />
      </div>
      <div className="stats-value">
        <p>{stat}</p>
        <h2>{amount}</h2>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default StatsCard;
