import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});
