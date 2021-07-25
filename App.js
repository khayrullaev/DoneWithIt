import React from "react";
import { StyleSheet } from "react-native";

import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
