import { NavigationActions } from "react-navigation";
import { MainNavigator } from "../navigators/MainNavigator";

const initialNavAction = MainNavigator.router.getActionForPathAndParams(
  "NewBuds"
);
const initialNavState = MainNavigator.router.getStateForAction(
  initialNavAction
);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case "Counter":
      nextState = MainNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Screen3" }),
        state
      );
      break;
    default:
      nextState = MainNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default navReducer;

// Start with two routes: The Main screen, with the Login screen on top.
/* VERY INTERESTING
const firstAction = MainNavigator.router.getActionForPathAndParams("Home");
console.log("First action");
console.log(firstAction);
const tempNavState = MainNavigator.router.getStateForAction(firstAction);
console.log("temp nav state");
console.log(tempNavState);
const secondAction = MainNavigator.router.getActionForPathAndParams("Login");
console.log("second action");
console.log(secondAction);
const initialNavState = MainNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);
console.log("initial nav state ");
console.log(initialNavState);
*/
// Okay so instead I want initialNavState to be ... do I want Home to be
// on TOP of Login? That might be convenient for the moment, I wonder,
// though ... if so, I'll have to customize the back button on Android
