import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import AuthNavigator from "./navigators/AuthNavigator";
import MainNavigator from "./navigators/MainNavigator";

class App extends Component {
  state = {
    user: "",
    isLoading: false
  };
  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false });
    }
  }
  async componentDidUpdate(prevProps) {
    console.log("prevProps.auth:", prevProps.auth);
    console.log("this.props.auth", this.props.auth);
    if (this.props.auth !== prevProps.auth) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.setState({ user });
        console.log("app.js cdu success", user);
      } catch (err) {
        this.setState({ user: {} });
        console.log("app.js cdu failure", err);
      }
    }
  }
  render() {
    if (this.state.isLoading) return null;
    if (!this.state.isLoading) {
      SplashScreen.hide();
    }
    let loggedIn = false;
    if (this.state.user.username) {
      loggedIn = true;
    }
    if (loggedIn) {
      return <MainNavigator />;
    }
    return <AuthNavigator />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
