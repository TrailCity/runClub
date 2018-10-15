import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class ViewRun extends Component {
  render() {
    const { navigation, run } = this.props;
    return (
      <View>
        <Text>Run:</Text>
        <Text>Time: {run.time}</Text>
        <Text>Place: {run.place}</Text>
        <Text>Title: {run.title}</Text>
        <Text onPress={() => navigation.dispatch({ type: "Counter" })}>
          Counter! Tap To Send To Counter Tab!
        </Text>
      </View>
    );
  }
}

export default ViewRun;
