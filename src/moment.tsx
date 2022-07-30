import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  icon: any;
  img_style?: any;
  img_bg1_style?: any;
  img_bg2_style?: any;
}
export default function Moment(props: Props) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[
        styles.img_bg1,
        { backgroundColor: theme.moment_top_bg },
        props.img_bg1_style,
      ]}
    >
      <View
        style={[
          styles.img_bg2,
          props.img_bg2_style,
          { backgroundColor: theme.moment_inner_bg },
        ]}
      >
        <Image source={props.icon} style={[styles.image, props.img_style]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img_bg1: {
    borderRadius: 1000,
    height: 88,
    width: 88,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6d6d6",
  },
  img_bg2: {
    borderRadius: 1000,
    backgroundColor: "#fff",
    height: 85,
    width: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
