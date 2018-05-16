import React from "react";
import { TabNavigator } from "react-navigation";
import NewBuds from "../components/NewBuds";
import Runs from "../components/Runs";
import ContentScreen3 from "../components/ContentScreen3";
import DubbyStackNav from "../navigators/DubbyStackNav";

const routes = {
  NewBuds: {
    screen: NewBuds
  },
  Runs: {
    screen: Runs
  },
  Screen3: {
    screen: ContentScreen3
  },
  Screen4: {
    screen: DubbyStackNav
  }
};

const config = {};

export default TabNavigator(routes, config);
