import PropTypes from "prop-types";

import { useAuth } from "../../contexts/authContext";

import "./styles.scss";

const ProfileDropdown = () => {
  const { logout } = useAuth();

  return (
    <div className="dropdown-container">
      <DropdownItem text="My Profile" url="/settings" />
      <DropdownItem text="Logout" url="#" logout={logout} />
    </div>
  );
};

const DropdownItem = ({ text, url, logout }) => {
  const handleLogout = e => {
    e.preventDefault();
    logout();
  };
  if (logout) {
    return (
      <>
        <div className="menu-divider"></div>
        <a href={url} onClick={handleLogout}>
          <div className={`dropdown-item ${logout ? "logout" : ""}`}>
            <p>{text}</p>
          </div>
        </a>
      </>
    );
  }
  return (
    <a href={url}>
      <div className="dropdown-item">
        <p>{text}</p>
      </div>
    </a>
  );
};

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logout: PropTypes.func
};

DropdownItem.defaultProps = {
  logout: null
};

export default ProfileDropdown;
