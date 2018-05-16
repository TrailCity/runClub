import React from "react";
import { StackNavigator } from "react-navigation";
import Welcome from "./Welcome";
import Welcome2 from "./Welcome2";

const routes = {
  Welcome,
  Welcome2
};

const config = {};

export default StackNavigator(routes, config);
