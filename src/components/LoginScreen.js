import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationActions } from "react-navigation";
import AppButton from "./AppButton";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  /*
    Okay so this is where I wanted to have sign in with email, with social, and sign up
    buttons. I guess if there's email signup, I need a forgot password, too.
    So, in switch (action.type) {
      case EMAIL_FAIL:
        shake animation,
        error display,
        forgot or sign up highlighted
      case SOCIAL_FAIL:
        oh, that would be handled off-app I gutess ...
        I guess if it comes back with a fail, I wonder if it brings an error message with it ...
      case SUCCESS:
        update redux,
        navigate to tab nav
      case: SIGN_UP:
        navigate to sign up in stack
    }
  */
  render() {
    const { navigation, toSignUp } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#006600" barStyle="light-content" />
        <Text style={styles.welcome}>Welcome to RunClub!</Text>
        <AppButton
          onPress={() => navigation.dispatch({ type: "Login" })}
          title="Log in"
        />
        <AppButton onPress={toSignUp} title="Sign Up" />
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

const mapDispatchToProps = dispatch => ({
  toSignUp: () => dispatch(NavigationActions.navigate({ routeName: "SignUp" }))
});

export default connect(null, mapDispatchToProps)(LoginScreen);
