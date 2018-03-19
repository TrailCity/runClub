import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { View, Text, Image, AppButton } from "react-native";

const Container = styled.View`
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

const Card = ({ firstName, lastName }) => (
  <Container>
    <CardText>{firstName}</CardText>
    <CardText>{lastName}</CardText>
  </Container>
);

Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Card;
