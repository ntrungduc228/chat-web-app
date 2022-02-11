import axios from "../api/axios";

export const createNewAccount = (data) => {
  return axios.post("/api/register", data);
};

export const verifyAccount = (data) => {
  return axios.post("/api/verify-account", data);
};

export const signInAccount = (data) => {
  return axios.post("/api/login", data);
};
