import { createStore, applyMiddleware } from "redux";
import { middleware } from "../utils/redux";
import rootReducer from "../reducers";

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(middleware));
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  console.log(store.getState());
  return store;
}
