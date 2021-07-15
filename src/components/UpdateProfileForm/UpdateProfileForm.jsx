import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import "./styles.scss";

const UpdateProfileForm = ({ formProps }) => {
  const { touched, errors, isSubmitting } = formProps;

  return (
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
  );
};

export default UpdateProfileForm;
