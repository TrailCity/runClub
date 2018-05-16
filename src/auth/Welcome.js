import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import Input from "../components/Input";
import { authenticate } from "../actions/creators";

const initialState = {
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
  signIn = () => {
    const { email, password } = this.state;
    this.props.dispatchAuthenticate(email, password);
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Welcome to RunClub!</Text>
        {/* What do we need? Button for SignUp, check, and text for sign in,
         and an email and password for signin. */}
        <Text>Sign in:</Text>
        <Input
          placeholder="email"
          type="email"
          onChangeText={this.onChangeText}
          value={this.state.email}
        />
        <Input
          placeholder="Password"
          type="password"
          onChangeText={this.onChangeText}
          value={this.state.password}
          secureTextEntry
        />
        <Button title="Sign In" onPress={this.signIn} />
        <Text>Or sign up!</Text>
        <Button
          onPress={() => navigation.navigate({ routeName: "SignUp" })}
          title="Sign Up"
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  dispatchAuthenticate: (email, password) => authenticate(email, password)
};

export default connect(null, mapDispatchToProps)(Welcome);
