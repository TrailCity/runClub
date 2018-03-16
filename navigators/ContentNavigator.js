import React, { Component } from "react";
import { Platform } from "react-native";
import { TabNavigator, DrawerNavigator } from "react-navigation";
import MainContentRouteConfigs from "../routes/MainContentRouteConfigs";

const ContentNavigator =
  Platform.OS === "ios"
    ? TabNavigator(MainContentRouteConfigs)
    : DrawerNavigator(MainContentRouteConfigs);

export default ContentNavigator;
