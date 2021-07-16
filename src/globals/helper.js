import DefaultProfilePic from "../static/images/noProfilePic.svg";
import { API_BASE_URL } from "./constants";

export const trimObjectValues = obj => {
  Object.keys(obj).map(
    k => (obj[k] = typeof obj[k] == "string" ? obj[k].trim() : obj[k])
  );
};

export const getProfileImage = getUser => {
  const { profilePhoto } = getUser();
  if (profilePhoto && profilePhoto.length)
    return API_BASE_URL + "/" + profilePhoto;
  return DefaultProfilePic;
};

export const getResponseData = response => {
  let result = {};
  if (response) {
    const { data, statusCode, message } = response.data;
    result.statusCode = statusCode;
    result.message = message;
    if (statusCode === 200) {
      if (data) result = { ...result, data };
    }
  }
  return result;
};
