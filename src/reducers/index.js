import { combineReducers } from "redux";
import navReducer from "./navReducer";
import auth from "./authReducer";
import counter from "./counterReducer";

// Call it anything else and it breaks.
// No idea why.
const nav = navReducer;

const AppReducer = combineReducers({
  nav,
  auth,
  counter
});

export default AppReducer;
