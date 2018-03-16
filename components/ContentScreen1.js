import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class ContentScreen1 extends Component {
  render() {
    return (
      <View>
        <Text>Screen1</Text>
      </View>
    );
  }
}

ContentScreen1.navigationOptions = {
  headerLeft: null
};

export default ContentScreen1;
