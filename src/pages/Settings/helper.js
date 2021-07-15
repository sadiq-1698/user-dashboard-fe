import * as Yup from "yup";

export const ChangePasswordFormValidation = Yup.object({
  confirm: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Required"),
  currentPassword: Yup.string()
    .required("Password required")
    .min(8, "Password should be of min 8 characters."),
  newPassword: Yup.string()
    .required("Required")
    .min(8, "Password should be of min 8 characters.")
});

export const ChangePasswordInitialValues = email => {
  return {
    email: email,
    currentPassword: "",
    newPassword: ""
  };
};

export const UpdateProfileFormValidation = Yup.object({
  firstName: Yup.string().required("Field required"),
  lastName: Yup.string().required("Field required"),
  dateOfBirth: Yup.string(),
  phone: Yup.number(),
  address: Yup.string(),
  profilePhoto: Yup.mixed()
});

export const UpdateProfileInitialValues = userInfo => {
  return {
    firstName: userInfo.firstName || "",
    lastName: userInfo.lastName || "",
    dateOfBirth: "",
    phone: userInfo.phone || "",
    address: userInfo.address || "",
    profilePhoto: ""
  };
};
