import { AppRegistry } from "react-native";
import React from "react";
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";
import AppWithNavigationState from "./src/navigators/AppNavigator";

const store = configureStore();

RunClub = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent("RunClub", () => RunClub);
