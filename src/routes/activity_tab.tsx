import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Follow from "../activity_follow";
import You from "../activity_you";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

export default function Activity_tab() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.type == "default" ? "#272727" : "#f6f6f6",
        tabBarInactiveTintColor:
          theme.type == "default" ? "#2626266d" : "#bebebeab",

        tabBarLabelStyle: { fontWeight: "700", textTransform: "capitalize" },
        tabBarIndicatorStyle: {
          backgroundColor: theme.type == "default" ? "#000" : "#fff",
          height: 1.5,
        },
        tabBarStyle: {
          elevation: 0,
          backgroundColor: theme.navColor,
        },
      }}
    >
      <Tab.Screen name="Following" component={Follow} />
      <Tab.Screen name="You" component={You} />
    </Tab.Navigator>
  );
}
