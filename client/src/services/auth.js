import axios from "../api/axios";

export const createNewAccount = (data) => {
  return axios.post("/register", data);
};
