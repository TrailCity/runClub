import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";

class SwipeeDoo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { runners } = this.props;
    return (
      <Swiper
        cards={runners}
        renderCard={user => {
          return <Card name={user.name} />;
        }}
      />
    );
  }
}

SwipeeDoo.navigationOptions = {
  headerLeft: null
};

export default SwipeeDoo;
