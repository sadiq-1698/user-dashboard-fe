import { useState } from "react";

import "../styles.scss";

const SecurityBox = ({ header }) => {
  const [enable, setEnable] = useState(false);

  const handleOnClick = () => {
    setEnable(s => !s);
  };

  return (
    <div className="settings-box security">
      <h4>{header}</h4>
      <div className="two-step-verify" onClick={handleOnClick}>
        <p>2-Step Verification</p>
        <div className={`enable-toggle ${enable ? "enabled" : ""}`}>
          <div className="toggle-ball"></div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBox;
