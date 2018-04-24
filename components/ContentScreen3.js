import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import CounterContainer from "./containers/CounterContainer";

class ContentScreen3 extends Component {
  render() {
    return (
      <View>
        <CounterContainer />
      </View>
    );
  }
}

ContentScreen3.navigationOptions = {
  headerLeft: null
};

export default ContentScreen3;
