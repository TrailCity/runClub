import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { authenticate } from "../actions/creators";

const initialState = {
  username: "",
  email: "",
  password: ""
};

class Welcome extends Component {
  state = initialState;
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  onChangeTextEmail = (key, value) => {
    this.setState({
      [key]: value
    });
    this.setState({
      username: value.replace(/[@.]/g, "|")
    });
  };
  signIn = () => {
    const { username, password } = this.state;
    this.props.dispatchAuthenticate(username, password);
  };
  render() {
    const {
      auth: { signInErrorMessage, isAuthenticating, signInError }
    } = this.props;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Welcome to RunClub!</Text>
        <Text>Sign in:</Text>
        <Input
          placeholder="email"
          type="email"
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />
        <Input
          placeholder="Password"
          type="password"
          onChangeText={this.onChangeText}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          title="Sign In"
          onPress={this.signIn}
          isLoading={isAuthenticating}
        />
        <Text style={[styles.errorMessage, signInError && { color: "black" }]}>
          Error logging in. Please try again.
        </Text>
        <Text style={[styles.errorMessage, signInError && { color: "black" }]}>
          {signInErrorMessage}
        </Text>
        <Text>Or sign up!</Text>
        <Button
          onPress={() => navigation.navigate({ routeName: "SignUp" })}
          title="Sign Up"
        />
      </View>
    );
  }
}

Welcome.navigationOptions = {
  header: null
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  dispatchAuthenticate: (email, password) => authenticate(email, password)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: "transparent"
  }
});
