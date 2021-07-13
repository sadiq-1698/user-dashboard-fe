import PropTypes from "prop-types";
import "./styles.scss";

const ScheduleListTile = ({ name, place, time, color }) => {
  return (
    <div className={`schedule-list-tile ${color}`}>
      <p className="schedule-name">{name}</p>
      <p className="schedule-place">{place}</p>
      <p className="schedule-time">{time}</p>
    </div>
  );
};

ScheduleListTile.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ScheduleListTile;
