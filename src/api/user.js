import axios from "axios";
import { API_ENDPOINTS } from "../globals/constants";

export const registerUser = async payload => {
  const response = await axios.post(API_ENDPOINTS.user.regsister, payload);
  return response;
};

export const loginUser = async payload => {
  const response = await axios.post(API_ENDPOINTS.user.login, payload);
  return response;
};

export const changeUserPassword = async (payload, accessToken) => {
  const response = await axios.patch(
    API_ENDPOINTS.user.changePassword,
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return response;
};

export const updateUserProfile = async (payload, accessToken) => {
  const response = await axios.patch(
    API_ENDPOINTS.user.updateProfile,
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json"
      }
    }
  );
  return response;
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.user.getAllUsers);
    return response.data;
  } catch (e) {
    return [];
  }
};
