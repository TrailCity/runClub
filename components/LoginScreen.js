import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    const { navigate } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#006600" barStyle="light-content" />
        <Text style={styles.welcome}>Welcome to RunClub!</Text>
        <Button
          onPress={() => navigation.dispatch({ type: "Login" })}
          title="Log in"
          color="#FFFFFF"
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
