import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class ContentScreen2 extends Component {
  render() {
    return (
      <View>
        <Text>Screen2</Text>
      </View>
    );
  }
}

ContentScreen2.navigationOptions = {
  headerLeft: null
};

export default ContentScreen2;
