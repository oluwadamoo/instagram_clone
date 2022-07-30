import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SimpleLineIcons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function Header() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View style={[styles.container, { backgroundColor: theme.navColor }]}>
      <View>
        <SimpleLineIcons
          name="camera"
          size={24}
          color={theme.type == "default" ? "#636363" : "#fff"}
        />
      </View>

      <Image
        source={
          theme.type == "default"
            ? require("../assets/logo.png")
            : require("../assets/logo_light.png")
        }
        style={styles.logo}
      />
      <View style={styles.right}>
        <View>
          <MaterialIcons
            name="live-tv"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />
        </View>
        <View>
          <Feather
            name="send"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: "row",
    paddingTop: 46,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 0.5,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 60,
  },
  logo: {
    width: "55%",
    height: "100%",
    resizeMode: "contain",
  },
});
