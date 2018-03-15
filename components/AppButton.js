import React from "react";
import { Button, Platform } from "react-native";

const AppButton = props => (
  <Button {...props} color={Platform === "ios" ? "#FFFFFF" : "#006600"} />
);

export default AppButton;
