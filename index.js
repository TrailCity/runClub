import { AppRegistry } from "react-native";
import React, { Component } from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import AppWithNavigationState from "./navigators/AppNavigator";

const store = configureStore();

RunClub = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent("RunClub", () => RunClub);
