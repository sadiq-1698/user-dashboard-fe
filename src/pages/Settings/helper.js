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
