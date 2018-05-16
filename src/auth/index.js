import React from "react";
import { StackNavigator } from "react-navigation";
import Welcome from "./Welcome";
import SignUp from "./SignUp";

const routes = {
  Welcome,
  SignUp
};

const config = {};

export default StackNavigator(routes, config);
