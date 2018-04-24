import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

const Counter = ({ count, increment, decrement }) => (
  <View>
    <Text>{count}</Text>
    <Button onPress={() => increment} title="Increment" />
    <Button onPress={() => decrement} title="Decrement" />
  </View>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
