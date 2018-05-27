import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import {
  TabNavigator,
  DrawerNavigator,
  addNavigationHelpers
} from "react-navigation";
import MainRoutes from "../routes/MainRoutes";
import { connect } from "react-redux";
import { addListener } from "../utils/redux";

export const MainNavigator =
  Platform.OS === "ios"
    ? TabNavigator(MainRoutes, {
        navigationOptions: {
          header: null
        }
      })
    : DrawerNavigator(MainRoutes);

class MainNavigatorWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <MainNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

MainNavigatorWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(MainNavigatorWithNavigationState);
