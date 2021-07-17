import axios from "axios";
import { API_BASE_URL } from "../globals/constants";

export const helloApp = async () => {
  const response = await axios.get(API_BASE_URL);
  return response;
};
