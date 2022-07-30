import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

interface Props {
  image: any;
  title: string;
}
export default function Stories(props: Props) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
        style={styles.img_bg1}
      >
        <View style={styles.img_bg2}>
          <Image source={props.image} style={styles.image} />
        </View>
      </LinearGradient>

      <Text
        style={[styles.title, { color: theme.textColor }]}
        numberOfLines={1}
      >
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  img_bg1: {
    borderRadius: 1000,
    height: 79,
    width: 79,
    alignItems: "center",
    justifyContent: "center",
  },
  img_bg2: {
    borderRadius: 1000,
    backgroundColor: "#fff",
    height: 75,
    width: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  title: {
    color: "#636363",
    width: 90,
  },
});
