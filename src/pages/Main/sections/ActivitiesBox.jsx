import "../styles.scss";

const ActivitiesBox = () => {
  return (
    <div className="dashboard-box activities">
      <div className="activities-box-head">
        <div className="left">
          <h3>Activities</h3>
          <div className="time-span">
            <p>May - June 2021&nbsp;</p>
            <div className="chevron-down">&gt;</div>
          </div>
        </div>
        <div className="right">
          <p>Guest</p>
          <p>User</p>
        </div>
      </div>
      <div className="activities-box-body"></div>
    </div>
  );
};

export default ActivitiesBox;
