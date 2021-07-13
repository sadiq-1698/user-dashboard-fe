import { useState } from "react";

import FieldWrapper from "../../components/FieldWrapper/FieldWrapper";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

import "./styles.scss";
import CircleProfileAvatar from "../../components/CircleProfileAvatar/CircleProfileAvatar";

const Settings = () => {
  return (
    <div className="settings-layout">
      <div className="left">
        <ProfileBox header="Profile" />
      </div>
      <div className="right">
        <AccountBox header="Account" />
        <SecurityBox header="Security" />
        <DangerBox header="Danger Zone" />
      </div>
    </div>
  );
};

const ProfileBox = ({ header }) => {
  return (
    <div className="settings-box">
      <h4>{header}</h4>
      <div className="profile-box-layout">
        <div className="left-prof">
          <CircleProfileAvatar
            img="https://images.unsplash.com/photo-1617885578851-d77b28ab005e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80"
            width="100px"
          />
          <button className="change-btn">Change</button>
        </div>

        <div className="right-prof">
          <div className="name-fields">
            <div className="fname-field">
              <FieldWrapper label="First name">
                <InputField />
              </FieldWrapper>
            </div>
            <FieldWrapper label="Last name">
              <InputField />
            </FieldWrapper>
          </div>
          <FieldWrapper label="Date of birth">
            <InputField />
          </FieldWrapper>
          <FieldWrapper label="Phone number">
            <InputField />
          </FieldWrapper>
          <FieldWrapper label="Address">
            <InputField />
          </FieldWrapper>
          <div className="save-btn">
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountBox = ({ header }) => {
  return (
    <div className="settings-box">
      <h4>{header}</h4>
      <FieldWrapper label="Email address">
        <InputField />
      </FieldWrapper>
      <FieldWrapper label="Current Password">
        <InputField />
      </FieldWrapper>
      <FieldWrapper label="New Password">
        <InputField />
      </FieldWrapper>
      <div className="save-btn">
        <Button>Save</Button>
      </div>
    </div>
  );
};

const SecurityBox = ({ header }) => {
  const [enable, setEnable] = useState(false);
  const handleOnClick = () => {
    setEnable(s => !s);
  };

  return (
    <div className="settings-box">
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

const DangerBox = ({ header }) => {
  return (
    <div className="settings-box">
      <h4 className="danger">{header}</h4>
      <Button danger wide>
        Delete My Account
      </Button>
    </div>
  );
};

export default Settings;
