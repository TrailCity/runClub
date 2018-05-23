import { createStore, applyMiddleware } from "redux";
import { middleware } from "../utils/redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const logger = store => next => action => {
  let result;
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(middleware, logger, thunk)
  );
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  console.log(store.getState());
  return store;
}
