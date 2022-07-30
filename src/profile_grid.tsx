import { FlatList, Image, Dimensions, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Profile_grid() {
  const maxWidth = Dimensions.get("screen").width / 3 - 2;
  const maxHeight = Dimensions.get("screen").width / 3 - 2;

  const theme = useSelector((state: any) => state.theme);

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
      id: 5,
      image: require("../assets/user2.jpg"),
    },
    {
      id: 6,
      image: require("../assets/user2.jpg"),
    },
    {
      id: 7,
      image: require("../assets/user2.jpg"),
    },
    {
      id: 8,
      image: require("../assets/user2.jpg"),
    },
    {
      id: 9,
      image: require("../assets/user2.jpg"),
    },
    {
      id: 10,
      image: require("../assets/user2.jpg"),
    },
  ];
  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingBottom: 50,
      }}
    >
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
