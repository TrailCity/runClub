import React from "react";
import { StackNavigator } from "react-navigation";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";

const routes = {
  Welcome,
  SignUp
};

const config = {};

export default StackNavigator(routes, config);
