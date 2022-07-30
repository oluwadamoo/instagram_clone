import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
const { width } = Dimensions.get("window");
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require("../assets/user1.jpg"),
  image2: require("../assets/user2.jpg"),
  image3: require("../assets/user3.jpg"),
  image4: require("../assets/user4.jpg"),
  image5: require("../assets/user5.jpg"),
  image6: require("../assets/user6.jpg"),
  image7: require("../assets/user1.jpg"),
};

export default function HomeCard() {
  const [images, setImages] = useState([
    { id: "1", image: IMAGES.image1 },
    { id: "2", image: IMAGES.image2 },
    { id: "3", image: IMAGES.image3 },
    { id: "4", image: IMAGES.image4 },
    { id: "5", image: IMAGES.image5 },
    { id: "6", image: IMAGES.image6 },
    { id: "7", image: IMAGES.image7 },
  ]);

  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected: number) => {
    setIndexSelected(indexSelected);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
      {/* Title JSX Remains same */}
      {/* Carousel View */}
      <View style={{ flex: 1 / 2, marginTop: 20 }}>
        <Carousel
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => onSelect(index)}
          renderItem={({ item, index }: any) => (
            <Image
              key={index}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          )}
        />

        <Pagination
          inactiveDotColor="gray"
          dotColor={"orange"}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 32,
          alignSelf: "flex-end",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
          }}
        >
          {indexSelected + 1}/{images.length}
        </Text>
      </View>
    </View>
  );
}
