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
    const dummyRunners = [
      {
        name: "Herb Derbyson"
      },
      {
        name: "Kyle Lieberman"
      },
      {
        name: "Jessica Jones"
      }
    ];
    let dummyValue;
    if (runners) {
      dummyValue = runners;
    } else {
      dummyValue = dummyRunners;
    }
    return (
      <Swiper
        cards={dummyValue}
        renderCard={user => {
          return <Card name={user.name} />;
        }}
        backgroundColor="#006600"
      />
    );
  }
}

SwipeeDoo.navigationOptions = {
  headerLeft: null
};

export default SwipeeDoo;
