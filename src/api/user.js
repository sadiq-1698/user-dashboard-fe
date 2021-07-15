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