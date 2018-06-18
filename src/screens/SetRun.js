import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

const initialState = {
  time: "",
  place: "",
  title: ""
};

class SetRun extends Component {
  state = initialState;
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  createRun = () => {
    // TODO THE STUFF
  };
  render() {
    const { toViewRun } = this.props;
    return (
      <View>
        <Text>Set Run!</Text>
        <Input
          placeholder="time"
          type="time"
          onChangeText={this.onChangeText}
          value={this.state.time}
        />
        <Input
          placeholder="place"
          type="place"
          onChangeText={this.onChangeText}
          value={this.state.place}
        />
        <Input
          placeholder="title"
          type="title"
          onChangeText={this.onChangeText}
          value={this.state.title}
        />
        <Button title="Create Run!" onPress={this.createRun} />
        <AppButton onPress={toViewRun} title="View Run!" />
      </View>
    );
  }
}

SetRun.navigationOptions = {
  headerLeft: null
};

const mapDispatchToProps = dispatch => ({
  toViewRun: () =>
    dispatch(NavigationActions.navigate({ routeName: "ViewRun" }))
});

export default connect(
  null,
  mapDispatchToProps
)(SetRun);
