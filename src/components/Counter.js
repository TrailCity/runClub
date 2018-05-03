import React from "react";
import PropTypes from "prop-types";
import { increment, decrement } from "../actions/creators";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

const Counter = ({ count, onIncrement, onDecrement }) => (
  <View style={{ paddingTop: 40 }}>
    <Text>Count: {count}</Text>
    <Button onPress={onIncrement} title="Increment" />
    <Button onPress={onDecrement} title="Decrement" />
  </View>
);

const mapStateToProps = state => ({
  count: state.counter
});
/*
const mapDispatchToProps = {
  onIncrement: () => increment(),
  onDecrement: () => decrement()
};
*/
const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch(increment());
  },
  onDecrement() {
    dispatch(decrement());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
