import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";
import { NavigationActions } from "react-navigation";

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return <Text>Please log in</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>{'You are "logged in" right now'}</Text>
      <AppButton
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: "Profile" }))
        }
        title="Profile"
      />
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  }
});

export default connect(mapStateToProps)(LoginStatusMessage);
