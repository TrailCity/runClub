import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Counter from "../components/Counter";

class ContentScreen5 extends Component {
  render() {
    return (
      <View>
        <Counter />
      </View>
    );
  }
}

ContentScreen5.navigationOptions = {
  headerLeft: null
};

export default ContentScreen5;
