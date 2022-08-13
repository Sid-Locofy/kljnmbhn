import * as React from "react";
import { StyleSheet, View } from "react-native";

const RectangleComponent = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 287,
    left: 47,
    backgroundColor: "#d9d9d9",
    width: 290,
    height: 340,
  },
});

export default RectangleComponent;
