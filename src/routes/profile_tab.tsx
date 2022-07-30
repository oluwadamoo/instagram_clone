import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile_grid from "../profile_grid";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

function Tags() {
  const theme = useSelector((state: any) => state.theme);

  return <View style={{ flex: 1, backgroundColor: theme.backgroundColor }} />;
}
export default function Profile_tab() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarIndicatorStyle: {
          backgroundColor: theme.type == "default" ? "#000" : "#fff",
        },
        tabBarStyle: {
          elevation: 0,
          backgroundColor: theme.backgroundColor,
        },
      }}
    >
      <Tab.Screen
        name="Grid"
        component={Profile_grid}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/grid_icon_dark.png")
                    : require("../../assets/grid_icon_light_f.png")
                  : theme.type == "default"
                  ? require("../../assets/grid_icon.png")
                  : require("../../assets/grid_icon_light.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tag"
        component={Tags}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/tags_icon_dark.png")
                    : require("../../assets/tags_icon_light_f.png")
                  : theme.type == "default"
                  ? require("../../assets/tags_icon.png")
                  : require("../../assets/tags_icon_light.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
