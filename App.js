import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet } from "react-native";
import ListingEditScreen from "./screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
