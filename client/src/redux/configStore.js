import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [thunk];

const rootPersistConfig = {
  key: "root",
  storage: storage,
  // blacklist: ["auth"],
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

// const configStore = createStore(
//   persistedReducer,
//   applyMiddleware(...middleware)
// );

const configStore = createStore(reducers, applyMiddleware(...middleware));

export const persistor = persistStore(configStore);

export default configStore;
