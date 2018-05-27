import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Swiper from "react-native-deck-swiper";
import Card from "../components/Card";
import data from "../data/data";

class NewBuds extends Component {
  render() {
    return (
      <Swiper
        cards={data}
        renderCard={user => {
          return <Card firstName={user.firstName} lastName={user.lastName} />;
        }}
      />
    );
  }
}

NewBuds.navigationOptions = {
  headerLeft: null
};

export default NewBuds;
