import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Counter from "../components/Counter";

class ContentScreen3 extends Component {
  render() {
    return (
      <View>
        <Counter />
      </View>
    );
  }
}

ContentScreen3.navigationOptions = {
  headerLeft: null
};

export default ContentScreen3;
