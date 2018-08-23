import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Provider from "./src/components/Provider";
import CardList from "./src/components/CardList";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title="ReactNativeCI" />
        <Provider>
          <CardList />
        </Provider>
      </View>
    );
  }
}
