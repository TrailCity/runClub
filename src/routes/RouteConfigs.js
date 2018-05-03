import Login from "../components/LoginScreen";
import SignUp from "../screens/DubbySignUp";
import ContentNavigator from "../navigators/ContentNavigator";

/*
  OK this is the entry, so we'll need
  - Welcome
  - Sign Up
  - [ Onboarding? ]
  - Tab Nav
*/

export default {
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Content: {
    screen: ContentNavigator
  }
};
