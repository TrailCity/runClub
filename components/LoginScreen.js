import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import AppButton from "./AppButton";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#006600" barStyle="light-content" />
        <Text style={styles.welcome}>Welcome to RunClub!</Text>
        <AppButton
          onPress={() => navigation.dispatch({ type: "Login" })}
          title="Log in"
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
  header: null
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

export default LoginScreen;
