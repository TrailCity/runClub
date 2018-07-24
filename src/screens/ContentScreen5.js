import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Counter from "../components/Counter";
import Button from "../components/Button";
import { logOut } from "../actions/creators";

class ContentScreen5 extends Component {
  onLogOut = () => {
    this.props.dispatchLogOut();
  };
  render() {
    return (
      <View>
        <Counter />
        <Button title="Log Out" onPress={this.onLogOut} />
      </View>
    );
  }
}

ContentScreen5.navigationOptions = {
  headerLeft: null
};

const mapDispatchToProps = {
  dispatchLogOut: () => logOut()
};

export default connect(
  null,
  mapDispatchToProps
)(ContentScreen5);
