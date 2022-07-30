import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

interface Props {
  onClick?: () => void;
  title: string;
  style?: any;
  titleStyle?: any;
}
export default function Button(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      activeOpacity={0.6}
      onPress={props.onClick}
    >
      <Text style={[styles.button_text, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#13a4e8",
    width: Dimensions.get("screen").width - 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 15,
  },
  button_text: {
    color: "#fff",
  },
});
