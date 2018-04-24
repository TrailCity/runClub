import { combineReducers } from "redux";
import navReducer from "./navReducer";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";

// Call it anything else and it breaks.
// No idea why.
const nav = navReducer;

const AppReducer = combineReducers({
  nav,
  authReducer,
  counterReducer
});

export default AppReducer;
