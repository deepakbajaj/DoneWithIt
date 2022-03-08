import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import AppText from "./app/components/AppText";

import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <AppText>I love react native</AppText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}
