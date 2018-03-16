import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class ContentScreen3 extends Component {
  render() {
    return (
      <View>
        <Text>Screen3</Text>
      </View>
    );
  }
}

ContentScreen3.navigationOptions = {
  headerLeft: null
};

export default ContentScreen3;
