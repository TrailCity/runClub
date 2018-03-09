import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import RouteConfigs from "../routes/RouteConfigs";
import { addListener } from "../utils/redux";

export const AppNavigator = StackNavigator(RouteConfigs);

class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
