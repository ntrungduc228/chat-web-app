import axios from "axios";
import { isAuthenticated } from "../components/Routes/permissionChecker";

import { getAppLanguage } from "../utils/app";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  timeout: 60000,
});

instance.interceptors.request.use(
  (config) => {
    if (isAuthenticated()) {
      config.headers["Authorization"] = "Bearer " + isAuthenticated();
      config.headers["x-access-token"] = isAuthenticated();
    }
    config.headers["language"] = getAppLanguage() || "en";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
