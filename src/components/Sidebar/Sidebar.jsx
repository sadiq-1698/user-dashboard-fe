import "./styles.scss";

const Sidebar = ({ screens, currentScreen }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="top">
          <h1 className="app-name">Dash.</h1>

          <div>
            {screens.map(({ page, path, icon }, i) => {
              let selected = page === currentScreen;
              return (
                <a
                  key={page}
                  href={path}
                  className={`screen-link ${selected ? "selected" : ""}`}
                >
                  <img
                    src={icon}
                    alt={page}
                    width="18px"
                    height="18px"
                    className="screen-icon"
                  />

                  <p className={`screen-name ${selected ? "selected" : ""}`}>
                    {page}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="bottom">
          <a href="/">
            <p className="help">Help</p>
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
