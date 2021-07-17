import Button from "../../../components/Button/Button";

import "../styles.scss";

const DangerBox = ({ header }) => {
  return (
    <div className="settings-box danger">
      <h4 className="danger">{header}</h4>
      <Button danger wide>
        Delete My Account
      </Button>
    </div>
  );
};

export default DangerBox;