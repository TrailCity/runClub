import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Swiper from "react-native-deck-swiper";

const Card = styled.View`
  flex: 1;
  border-radius: 4;
  border-width: 2;
  border-color: #006600;
  justify-content: center;
  background-color: #456123;
`;

const CardText = styled.Text`
  text-align: center;
  font-size: 50;
  background-color: transparent;
`;

class NewBuds extends Component {
  render() {
    return (
      <Swiper
        cards={["do", "the", "thing"]}
        renderCard={card => {
          return (
            <Card>
              <CardText>{card}</CardText>
            </Card>
          );
        }}
      />
    );
  }
}

NewBuds.navigationOptions = {
  headerLeft: null
};

export default NewBuds;
