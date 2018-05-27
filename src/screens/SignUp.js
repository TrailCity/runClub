import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Modal, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { createUser, confirmUserSignUp } from "../actions/creators";

const initialState = {
  username: "",
  email: "",
  password: "",
  authCode: ""
};

class SignUp extends Component {
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
  signUp = () => {
    const { username, password, email } = this.state;
    this.props.dispatchCreateUser(username, password, email);
  };
  confirm = () => {
    const { username, authCode } = this.state;
    this.props.dispatchConfirmSignUp(username, authCode);
  };
  componentWillReceiveProps(nextProps) {
    const {
      auth: { showSignUpConfirmationModal }
    } = nextProps;
    if (
      !showSignUpConfirmationModal &&
      this.props.auth.showSignUpConfirmationModal
    ) {
      this.setState(initialState);
    }
  }
  render() {
    const {
      auth: {
        showSignUpConfirmationModal,
        isAuthenticating,
        signUpError,
        signUpErrorMessage
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <Text>Welcome to RunClub!</Text>
        <Text>Sign up to share runs with other awesome runners!</Text>
        <Input
          placeholder="email"
          type="email"
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
          autoFocus={true}
        />
        <Input
          placeholder="password"
          type="password"
          onChangeText={this.onChangeText}
          value={this.state.password}
          secureTextEntry
        />
        {/*
        <Input
          placeholder="confirm password"
          type="password"
          onChangeText={this.onChangeText}
          value={this.state.passwordConfirm}
          secureTextEntry
        />
        */}
        <Button title="Sign Up" onPress={this.signUp} />
        <Text style={[styles.errorMessage, signUpError && { color: "black" }]}>
          Error logging in! Please try again.
        </Text>
        <Text style={[styles.errorMessage, signUpError && { color: "black" }]}>
          {signUpErrorMessage}
        </Text>
        {showSignUpConfirmationModal && (
          <Modal>
            <View style={styles.modal}>
              <Input
                placeholder="Authorization Code"
                type="authCode"
                keyboardType="numeric"
                onChangeText={this.onChangeText}
                value={this.state.authCode}
              />
              <Button
                title="Confirm"
                onPress={this.confirm}
                isLoading={isAuthenticating}
              />
            </View>
          </Modal>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  dispatchCreateUser: (username, password, email) =>
    createUser(username, password, email),
  dispatchConfirmSignUp: (username, authCode) =>
    confirmUserSignUp(username, authCode)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
