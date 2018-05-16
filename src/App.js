import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import Auth from "./auth";
import Main from "./main";

class App extends Component {
  state = {
    user: "",
    isLoading: true
  };
  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false });
    }
  }
  async componentWillReceiveProps(nextProps) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user });
    } catch (err) {
      this.setState({ user: {} });
    }
  }
  render() {
    if (this.state.isLoading) return null;
    {
      /* This is where we put in the splash screen beauty*/
    }
    let loggedIn = false;
    if (this.state.user.username) {
      loggedIn = true;
    }
    if (loggedIn) {
      return <Main />;
    }
    return <Auth />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
