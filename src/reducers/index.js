import { combineReducers } from "redux";
import navReducer from "./navReducer";
import authReducer from "./authReducer";
import counter from "./counterReducer";

// Call it anything else and it breaks.
// No idea why.
const nav = navReducer;

const AppReducer = combineReducers({
  nav,
  authReducer,
  counter
});

export default AppReducer;
