import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class Dubby2 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text onPress={() => navigation.dispatch({ type: "Counter" })}>
          Dubby2! Tap To Send To Counter!
        </Text>
      </View>
    );
  }
}

export default Dubby2;
