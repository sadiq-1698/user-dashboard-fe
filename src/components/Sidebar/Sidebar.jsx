import "./styles.scss";

const Sidebar = ({ screens, currentScreen }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="top">
          <h1 className="app-name">Dash.</h1>
          {screens.map(({ page, path }, i) => {
            return (
              <a key={page} href={path}>
                <p
                  className={`screen-name ${
                    page === currentScreen ? "selected" : ""
                  }`}
                >
                  {page}
                </p>
              </a>
            );
          })}
        </div>
        <div className="bottom">
          <a href="/" className="help">
            <p>Help</p>
          </a>
          <a href="/">
            <p>Contact Us</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
