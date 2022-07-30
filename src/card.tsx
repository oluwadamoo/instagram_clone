import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const deviceWidth = Dimensions.get("window").width;
const FIXED_BAR_WIDTH = 100;
const BAR_SPACE = 5;

interface Props {
  images: Array<any>;
  profile_picture?: any;
  location?: string;
  username?: string;
  description?: string;
  likes?: string;
}
export default function Card(props: Props) {
  const theme = useSelector((state: any) => state.theme);

  let numItems = props.images.length;
  let itemWidth =
    numItems > 5 ? FIXED_BAR_WIDTH / numItems - (numItems - 1) * BAR_SPACE : 10;

  let animVal = new Animated.Value(0);

  let imageArray: Array<any> = [];
  let barArray: Array<any> = [];

  props.images.forEach((image, i) => {
    const thisImage = (
      <>
        <Image
          key={`image${i}`}
          source={image}
          style={{ width: deviceWidth, height: 500 }}
        />
      </>
    );
    imageArray.push(thisImage);

    const scrollBarVal = animVal.interpolate({
      inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
      outputRange: [-itemWidth, itemWidth],
      extrapolate: "clamp",
    });

    const thisBar = (
      <View
        key={`bar${i}`}
        style={[
          styles.track,
          {
            width: itemWidth,
            height: itemWidth,
            marginLeft: i === 0 ? 0 : BAR_SPACE,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.bar,
            {
              width: itemWidth,
              transform: [{ translateX: scrollBarVal }],
            },
          ]}
        />
      </View>
    );
    barArray.push(thisBar);
  });

  return (
    <View style={styles.container}>
      <View style={styles.card_header}>
        <View style={styles.user_details}>
          <Image source={props.profile_picture} style={styles.profile_pic} />
          <View style={styles.user}>
            <Text style={[styles.username, { color: theme.textColor }]}>
              {props.username}
            </Text>
            <Text style={[styles.location, { color: theme.textColor }]}>
              {props.location}
            </Text>
          </View>
        </View>
        <View>
          <Ionicons
            name="ellipsis-horizontal-sharp"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />
        </View>
      </View>
      <ScrollView
        // style={{ height: 500, backgroundColor: "red" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        pagingEnabled
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: animVal } } },
        ])}
      >
        {imageArray}
      </ScrollView>
      <View style={styles.card_footer}>
        <View style={styles.left_icon_con}>
          <Feather
            name="heart"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />

          <Feather
            name="send"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />
        </View>
        <View style={styles.barContainer}>{barArray}</View>
        <View>
          <Ionicons
            name="md-bookmark-outline"
            size={24}
            color={theme.type == "default" ? "#636363" : "#fff"}
          />
        </View>
      </View>

      <View style={styles.card_desc}>
        <View style={styles.likes}>
          <Text style={[styles.like_txt, { color: theme.textColor }]}>
            40 likes
          </Text>
        </View>
        <View style={styles.desc_txt_con}>
          <Text style={[styles.desc_txt, { color: theme.textColor }]}>
            <Text style={styles.username}>{props.username} </Text>
            {props.description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  card_header: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  user_details: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_pic: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  user: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    color: "#383838",
  },
  card_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  left_icon_con: {
    minWidth: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  barContainer: {
    zIndex: 2,
    flexDirection: "row",
  },

  track: {
    backgroundColor: "#ccc",
    overflow: "hidden",
    borderRadius: 100,
  },
  bar: {
    backgroundColor: "#5294d6",
    height: 30,
    borderRadius: 100,
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  card_desc: {
    paddingHorizontal: 10,
  },
  likes: {},
  like_txt: {
    color: "#383838",
  },
  desc_txt_con: {
    marginTop: 3,
  },
  desc_txt: {
    color: "#383838",
  },
});
