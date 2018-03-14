import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthButton from "./AuthButton";
import Counter from "./Counter";

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Profile Screen</Text>
    <AuthButton />
    {/*<Counter count={0} />*/}
  </View>
);

ProfileScreen.navigationOptions = {
  title: "Profile"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006600"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});

export default ProfileScreen;
