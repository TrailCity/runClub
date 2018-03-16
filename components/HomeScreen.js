import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import LoginStatusMessage from "./LoginStatusMessage";
import AuthButton from "./AuthButton";

const HomeScreen = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#006600" barStyle="light-content" />
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

HomeScreen.navigationOptions = {
  title: "Home Screen",
  headerLeft: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006600"
  }
});

export default HomeScreen;
