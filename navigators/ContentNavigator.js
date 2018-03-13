import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, TabNavigator } from "react-navigation";
import TabRouteConfigs from "../routes/TabRouteConfigs";
import { addListener } from "../utils/redux";

export const ContentNavigator = TabNavigator(TabRouteConfigs);

class ContentWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };
  render() {
    const { dispatch, nav } = this.props;
    return (
      <ContentNavigator
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

export default connect(mapStateToProps)(ContentWithNavigationState);
