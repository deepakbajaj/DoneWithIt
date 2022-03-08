import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
        }}>
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,
          margin: 20,
        }}></View>
    </View>
  );
}
