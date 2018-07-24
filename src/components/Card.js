import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { View, Text, Image, AppButton } from "react-native";
import { colors } from "../theme";

const Container = styled.View`
  flex: 1;
  border-radius: 4;
  border-width: 2;
  border-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const CardText = styled.Text`
  text-align: center;
  font-size: 50;
  background-color: transparent;
`;

const DummyImageBox = styled.View`
  height: 400;
  width: 300;
  background-color: ${colors.silverPink};
`;

const Card = ({ name }) => (
  <Container>
    <DummyImageBox />
    <CardText>{name}</CardText>
  </Container>
);

Card.propTypes = {
  name: PropTypes.string.isRequired
};

export default Card;
