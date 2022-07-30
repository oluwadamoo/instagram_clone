import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function Search() {
  const theme = useSelector((state: any) => state.theme);

  const maxWidth = Dimensions.get("screen").width / 3;
  const maxHeight = 200;

  const data = [
    {
      id: 1,
      image: require("../assets/user1.jpg"),
    },
    {
      id: 2,
      image: require("../assets/user3.jpg"),
    },
    {
      id: 3,
      image: require("../assets/user4.jpg"),
    },
    {
      id: 4,
      image: require("../assets/user5.jpg"),
    },
    {
      id: 4,
      image: require("../assets/user2.jpg"),
    },
  ];
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.header}>
        <View
          style={[
            styles.search_input_con,
            {
              backgroundColor:
                theme.type == "default" ? "#dbdbdb" : "#272727d6",
            },
          ]}
        >
          <Ionicons name="ios-search-outline" size={18} color="#8c8c8c" />
          <TextInput
            placeholder="Search"
            style={styles.search_input}
            placeholderTextColor="#8c8c8c"
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          <View
            style={[styles.header_btn, { backgroundColor: theme.btn_color }]}
          >
            <FontAwesome5
              name="tv"
              size={14}
              color={theme.textColor}
              style={{ marginRight: 5 }}
            />
            <Text style={[styles.header_btn_txt, { color: theme.textColor }]}>
              IGTV
            </Text>
          </View>
          <View
            style={[styles.header_btn, { backgroundColor: theme.btn_color }]}
          >
            <FontAwesome5
              name="shopping-bag"
              size={14}
              color={theme.textColor}
              style={{ marginRight: 5 }}
            />
            <Text style={[styles.header_btn_txt, { color: theme.textColor }]}>
              Shop
            </Text>
          </View>
          <View
            style={[styles.header_btn, { backgroundColor: theme.btn_color }]}
          >
            <Text style={[styles.header_btn_txt, { color: theme.textColor }]}>
              Style
            </Text>
          </View>
          <View
            style={[styles.header_btn, { backgroundColor: theme.btn_color }]}
          >
            <Text style={[styles.header_btn_txt, { color: theme.textColor }]}>
              Sports
            </Text>
          </View>
          <View
            style={[styles.header_btn, { backgroundColor: theme.btn_color }]}
          >
            <Text style={[styles.header_btn_txt, { color: theme.textColor }]}>
              Auto
            </Text>
          </View>
          <View
            style={[styles.header_btn, { backgroundColor: theme.btn_color }]}
          >
            <Text style={[styles.header_btn_txt, { color: theme.textColor }]}>
              Tech
            </Text>
          </View>
        </ScrollView>
      </View>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <Image
            key={item.id}
            source={item.image}
            style={{
              //   backgroundColor: "red",
              marginHorizontal: 1,
              marginVertical: 1,
              maxWidth: maxWidth,
              maxHeight: maxHeight,
              resizeMode: "cover",
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    minHeight: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },
  header: {
    padding: 5,
    paddingHorizontal: 10,
  },
  search_input_con: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbdbdb",
    borderRadius: 5,
    padding: 5,
  },
  search_input: {
    paddingHorizontal: 8,
    color: "#424242",
  },
  header_btn: {
    borderColor: "#dbdbdb",
    borderWidth: 0.5,
    padding: 2,
    paddingHorizontal: 13,
    borderRadius: 4,
    backgroundColor: "#fff",
    elevation: 1,
    marginHorizontal: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  header_btn_txt: {
    fontSize: 13,
  },
});
