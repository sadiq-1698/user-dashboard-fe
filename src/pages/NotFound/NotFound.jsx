import { useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";

import "./styles.scss";

const NotFound = () => {
  const history = useHistory();

  const goToDashboard = () => {
    history.replace("/");
  };

  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <h1>Oops! Page not found.</h1>
        <Button onClick={goToDashboard}>Go to Dashboard</Button>
      </div>
    </div>
  );
};

export default NotFound;
