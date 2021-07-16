import PropTypes from "prop-types";
import ScheduleListTile from "../../../components/ScheduleListTile/ScheduleListTile";

import { SCHEDULES } from "../../../globals/constants";

const ScheduleBox = ({ hide }) => {
  return (
    <div className="dashboard-box schedule">
      <div className="schedule-box-head">
        <h3>Today's Schedule</h3>
        {!hide && (
          <p className="see-all-schedule">
            <a href="/schedules">See all ></a>
          </p>
        )}
      </div>

      <div className="schedule-box-body">
        {SCHEDULES.map((val, i) => {
          return (
            <ScheduleListTile
              name={val.name}
              place={val.place}
              time={val.time}
              color={val.tileColor}
              key={val.name}
            />
          );
        })}
      </div>
    </div>
  );
};

ScheduleBox.propTypes = {
  hide: PropTypes.bool
};

ScheduleBox.defaultProps = {
  hide: false
};

export default ScheduleBox;
