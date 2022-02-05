import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  // middleware.push(createLogger());
}

export const configStore = createStore(
  reducers,
  applyMiddleware(...middleware)
);
// export const store = createStore(reducers);
