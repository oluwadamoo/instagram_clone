import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import Header from "./header";
import Stories from "./stories";
import Card from "./card";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Header />

      <ScrollView>
        <View style={styles.stories}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Stories
              title="Your Story"
              image={require("../assets/user1.jpg")}
            />
            <Stories
              title="John Abraham"
              image={require("../assets/user2.jpg")}
            />
            <Stories
              title="Chris Andrew"
              image={require("../assets/user3.jpg")}
            />
            <Stories
              title="Jane Brune"
              image={require("../assets/user4.jpg")}
            />
            <Stories
              title="Bridget Diana"
              image={require("../assets/user5.jpg")}
            />
            <Stories
              title="Dinah Brandon"
              image={require("../assets/user6.jpg")}
            />
          </ScrollView>
        </View>

        {/* Cards */}
        {/* <ScrollView> */}
        <Card
          images={[
            require("../assets/user1.jpg"),
            require("../assets/user1.jpg"),
            require("../assets/user1.jpg"),
            require("../assets/user1.jpg"),
          ]}
          profile_picture={require("../assets/user1.jpg")}
          description={
            "The game in Victoria Island was amazing and I want to share somme photos blah blah blah"
          }
          username={"Dami Krane"}
          location={"Lagos, Nigeria"}
        />
        <Card
          images={[
            require("../assets/user2.jpg"),
            require("../assets/user3.jpg"),
            require("../assets/user2.jpg"),
          ]}
          profile_picture={require("../assets/user1.jpg")}
          description={
            "The game in Victoria Island was amazing and I want to share somme photos blah blah blah"
          }
          username={"Dami Krane"}
          location={"Lagos, Nigeria"}
        />

        <View style={{ height: 50 }} />
        {/* </ScrollView> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },
  stories: {
    // height: 95,
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 0.5,
  },
});
