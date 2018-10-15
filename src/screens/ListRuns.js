import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

class ListRuns extends Component {
  render() {
    const { runs } = this.props;
    return (
      <View>
        <Text>Runs:</Text>
        <FlatList
          data={runs}
          renderItem={({ run }) => (
            <View>
              <Text>Runner: {run.initiator}</Text>
              <Text>Time: {run.time}</Text>
              <Text>Place: {run.place}</Text>
              <Text>Title: {run.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default ListRuns;
