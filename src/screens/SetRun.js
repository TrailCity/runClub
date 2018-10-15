import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { v4 } from "uuid";

class SetRun extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState = () => ({
    id: v4(),
    time: "",
    place: "",
    title: ""
  });
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  createRun = () => {
    const { id, time, place, title } = this.state;
    this.setState(this.getInitialState(), () => {
      this.props.onCreate({ id, time, place, title });
    });
  };
  render() {
    const { toViewRun } = this.props;
    return (
      <View style={styles.container}>
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
        {/* <AppButton onPress={toViewRun} title="View Run!" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40
  }
});

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
