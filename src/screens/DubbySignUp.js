import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class DubbySignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Whatup</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 36
  }
});

export default DubbySignUp;
