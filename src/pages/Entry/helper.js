import * as Yup from "yup";

export const RegisterFormValidation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password should be of min 8 characters."),
  confirm: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  acceptTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions.")
});

export const RegisterationInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
  acceptTerms: false
};

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

export const getGoogleBasicProfileObj = obj => {
  let resultObj = {};
  resultObj["email"] = obj?.It;
  resultObj["firstName"] = obj?.hU;
  resultObj["lastName"] = obj?.dS;
  resultObj["password"] = obj?.xS;
  return resultObj;
};
