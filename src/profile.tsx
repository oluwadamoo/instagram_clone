import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Button from "./button";
import Moment from "./moment";
import Profile_tab from "./routes/profile_tab";
import { useSelector } from "react-redux";

export default function Profile({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.header}>
        <View style={styles.header_center}>
          <Ionicons name="md-lock-closed" size={12} color={theme.textColor} />
          <Text style={[styles.username, { color: theme.textColor }]}>
            jacob_w
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={theme.textColor}
          />
        </View>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={27} color={theme.textColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.img_n_follow}>
          <Moment icon={require("../assets/user5.jpg")} />
          <View style={styles.follow}>
            <Text style={[styles.amt, { color: theme.textColor }]}>54</Text>
            <Text style={[styles.title, { color: theme.textColor }]}>
              Posts
            </Text>
          </View>
          <View style={styles.follow}>
            <Text style={[styles.amt, { color: theme.textColor }]}>834</Text>
            <Text style={[styles.title, { color: theme.textColor }]}>
              Followers
            </Text>
          </View>
          <View style={styles.follow}>
            <Text style={[styles.amt, { color: theme.textColor }]}>162</Text>
            <Text style={[styles.title, { color: theme.textColor }]}>
              Following
            </Text>
          </View>
        </View>

        <View style={styles.bio}>
          <Text style={[styles.bio_name, { color: theme.textColor }]}>
            Jacob West
          </Text>
          <Text style={[styles.bio_desc, { color: theme.textColor }]}>
            Digital goodies designer{" "}
            <Text style={{ color: "#1561a8" }}>@pixsellz</Text> Everything is
            designed.
          </Text>
        </View>
        <Button
          onClick={() => navigation.push("Edit Profile")}
          title="Edit Profile"
          style={{
            backgroundColor: theme.backgroundColor,
            borderWidth: 0.5,
            borderColor: "#cfcfcf",
            width: Dimensions.get("screen").width - 27,
          }}
          titleStyle={{ color: theme.textColor }}
        />

        <View style={styles.moments}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moment}>
              <Moment
                icon={
                  theme.type == "default"
                    ? require("../assets/plus.png")
                    : require("../assets/plus_dark.png")
                }
                img_style={{ width: 20, height: 20 }}
                img_bg1_style={{ width: 63, height: 63 }}
                img_bg2_style={{ width: 60, height: 60 }}
              />
              <Text style={[styles.moment_txt, { color: theme.textColor }]}>
                New
              </Text>
            </View>
            <View style={styles.moment}>
              <Moment
                icon={require("../assets/user1.jpg")}
                img_style={{ width: 55, height: 55 }}
                img_bg1_style={{ width: 63, height: 63 }}
                img_bg2_style={{ width: 60, height: 60 }}
              />
              <Text style={[styles.moment_txt, { color: theme.textColor }]}>
                Friends
              </Text>
            </View>
            <View style={styles.moment}>
              <Moment
                icon={require("../assets/user2.jpg")}
                img_style={{ width: 55, height: 55 }}
                img_bg1_style={{ width: 63, height: 63 }}
                img_bg2_style={{ width: 60, height: 60 }}
              />
              <Text style={[styles.moment_txt, { color: theme.textColor }]}>
                Sport
              </Text>
            </View>
            <View style={styles.moment}>
              <Moment
                icon={require("../assets/user6.jpg")}
                img_style={{ width: 55, height: 55 }}
                img_bg1_style={{ width: 63, height: 63 }}
                img_bg2_style={{ width: 60, height: 60 }}
              />
              <Text style={[styles.moment_txt, { color: theme.textColor }]}>
                Design
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Tabs */}
      <Profile_tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("screen").height,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_center: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    color: "#383838",
  },
  menu: {},
  details: {
    paddingHorizontal: 15,
  },
  img_n_follow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  follow: {
    alignItems: "center",
  },
  amt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4d4d4d",
  },
  title: {
    color: "#4d4d4d",
  },
  bio: {
    marginVertical: 5,
  },
  bio_name: {
    color: "#383838",
    fontWeight: "bold",
  },
  bio_desc: {
    color: "#383838",
    width: Dimensions.get("screen").width * 0.6,
  },
  moments: {
    marginVertical: 15,
  },
  moment: {
    alignItems: "center",
    marginHorizontal: 12,
  },
  moment_txt: {
    color: "#4d4d4d",
    fontSize: 13,
  },
});
