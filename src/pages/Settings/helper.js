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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const UpdateProfileFormValidation = Yup.object({
  firstName: Yup.string().required("Field required"),
  lastName: Yup.string().required("Field required"),
  dateOfBirth: Yup.string()
    .required()
    .test("len", "Select your DOB", val => val && val.length > 0),
  phone: Yup.string()
    .required("Phone number required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be of 10 digits")
    .max(10, "Maximum 10 digits"),
  address: Yup.string().required("Address required"),
  profilePhoto: Yup.mixed()
});

export const UpdateProfileInitialValues = userInfo => {
  return {
    firstName: userInfo.firstName || "",
    lastName: userInfo.lastName || "",
    dateOfBirth: userInfo.dateOfBirth || "",
    phone: userInfo.phone || "",
    address: userInfo.address || "",
    profilePhoto: ""
  };
};
