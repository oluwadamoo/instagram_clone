import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

export default function Activity_sections({ item }: any) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <View style={styles.user_container}>
        <View>
          <Image
            source={{ uri: item.profile_pic }}
            style={styles.profile_pic}
          />
        </View>
        <View style={styles.user_wrapper}>
          <Text style={[styles.msg, { color: theme.textColor }]}>
            <Text style={styles.user}>{item.user}</Text> {item.message}
            <Text style={styles.time}> {item.time}</Text>
          </Text>
        </View>
      </View>
      <View>
        {item.image != null ? (
          <Image source={{ uri: item.image }} style={styles.image} />
        ) : (
          <TouchableOpacity
            activeOpacity={0.6}
            style={[
              styles.btn,
              {
                backgroundColor:
                  item.action == "message"
                    ? theme.type == "default"
                      ? "#fff"
                      : "#000"
                    : "#1497d4",
                borderColor:
                  theme.type == "default" ? "#2626266d" : "#6c6b6bbf",
                borderWidth: item.action == "message" ? 0.5 : 0,
              },
            ]}
          >
            <Text
              style={{
                textTransform: "capitalize",
                color:
                  item.action == "message"
                    ? theme.type == "default"
                      ? "#000"
                      : "#fff"
                    : "#fff",
                fontSize: 13,
              }}
            >
              {item.action}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 20,
  },
  user_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_pic: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  user_wrapper: {
    marginLeft: 18,
    width: Dimensions.get("screen").width - 250,
  },
  msg: {},
  user: {
    fontWeight: "bold",
  },
  time: {
    color: "#a5a5a5",
  },
  image: {
    width: 50,
    height: 50,
  },
  btn: {
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
});
