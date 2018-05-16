import { AppRegistry } from "react-native";
import React from "react";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";
// import AppWithNavigationState from "./src/navigators/AppNavigator";
import App from "./src/App";

Amplify.configure(config);

const store = configureStore();
/*
RunClub = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
*/
RunClub = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("RunClub", () => RunClub);
