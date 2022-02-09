import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./Auth";
import appReducer from "./App";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCommonConfig = {
  storage: storage,
};

const appPersistConfig = {
  ...persistCommonConfig,
  key: "app",
  whitelist: ["language"],
};

const reducers = combineReducers({
  posts: postReducer,
  auth: authReducer,
  app: persistReducer(appPersistConfig, appReducer),
});

export default reducers;
