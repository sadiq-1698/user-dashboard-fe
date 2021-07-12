import "./styles.scss";

const Topbar = ({ screen }) => {
  return (
    <div className="topbar">
      <div className="screen-name">
        <h2>{screen}</h2>
      </div>
      <div className="profile-section">
        <input />
        <div style={{ background: "red", height: "10px", width: "10px" }}></div>
        <div style={{ background: "red", height: "10px", width: "10px" }}></div>
      </div>
    </div>
  );
};

export default Topbar;
