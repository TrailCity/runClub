import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigators/AppNavigator";
// import { ContentNavigator } from "../navigators/ContentNavigator";
/* VERY INTERESTING
// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams("Home");
console.log("First action");
console.log(firstAction);
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
console.log("temp nav state");
console.log(tempNavState);
const secondAction = AppNavigator.router.getActionForPathAndParams("Login");
console.log("second action");
console.log(secondAction);
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);
console.log("initial nav state ");
console.log(initialNavState);
*/
// Okay so instead I want initialNavState to be ... do I want Home to be
// on TOP of Login? That might be convenient for the moment, I wonder,
// though ... if so, I'll have to customize the back button on Android

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case "Login":
      return { ...state, isLoggedIn: true };
    case "Logout":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const initialNavAction = AppNavigator.router.getActionForPathAndParams("Login");
const initialNavState = AppNavigator.router.getStateForAction(initialNavAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case "Login":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Home" }),
        state
      );
      break;
    case "Logout":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

const initialCounterState = { count: 0 };

const counter = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  nav,
  auth,
  counter
});

export default AppReducer;
