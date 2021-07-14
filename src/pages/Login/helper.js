import * as Yup from "yup";

export const LoginFormValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password should be of min 8 characters.")
});

export const LoginInitialValues = {
  email: "",
  password: ""
};
