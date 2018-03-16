import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import AppButton from "./AppButton";

const Dubby1 = ({ nextScreen }) => (
  <View>
    <Text>Dubby1</Text>
    <AppButton onPress={nextScreen} title="Dubby2" />
  </View>
);

Dubby1.navigationOptions = {
  headerLeft: null
};

const mapDispatchToProps = dispatch => ({
  nextScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Dubby2" }))
});

export default connect(null, mapDispatchToProps)(Dubby1);
