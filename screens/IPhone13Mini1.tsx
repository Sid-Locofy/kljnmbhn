import * as React from "react";
import { StyleSheet, View } from "react-native";
import RectangleComponent from "../components/RectangleComponent";

const IPhone13Mini1 = () => {
  return (
    <View style={styles.iPhone13Mini1}>
      <RectangleComponent />
      <View style={styles.frameView} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameView: {
    position: "absolute",
    top: 447,
    left: 124,
    backgroundColor: "#ff0000",
    width: 115,
    height: 246,
    overflow: "hidden",
  },
  iPhone13Mini1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default IPhone13Mini1;
