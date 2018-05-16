import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Button
      onPress={() => navigation.navigate({ routeName: "Welcome2" })}
      title="HI!!!!!!!!!!!!"
    />
  </View>
);
