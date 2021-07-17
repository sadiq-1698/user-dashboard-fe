import axios from "axios";
import { API_ENDPOINTS } from "../globals/constants";

export const registerUser = async payload => {
  try {
    const response = await axios.post(API_ENDPOINTS.user.regsister, payload);
    return response;
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};

export const loginUser = async payload => {
  try {
    const response = await axios.post(API_ENDPOINTS.user.login, payload);
    return response;
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};

export const changeUserPassword = async (payload, accessToken) => {
  try {
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
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};

export const updateUserProfile = async (payload, accessToken) => {
  try {
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
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.user.getAllUsers);
    return response.data;
  } catch (e) {
    return [];
  }
};

export const registerWithGoogle = async payload => {
  try {
    const response = await axios.post(
      API_ENDPOINTS.user.google.register,
      payload
    );
    return response;
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};

export const loginWithGoogle = async payload => {
  try {
    const response = await axios.post(API_ENDPOINTS.user.google.login, payload);
    return response;
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};
