import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home";
import Search from "../search";
import Profile from "../profile";
import { Image } from "react-native";
import Moment from "../moment";
import ProfileRoute from "./profile_route";
import Activity from "../activity";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function Bottom() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.backgroundColor },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/home_dark.png")
                    : require("../../assets/home_light_f.png")
                  : theme.type == "default"
                  ? require("../../assets/home.png")
                  : require("../../assets/home_light.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/search_dark.png")
                    : require("../../assets/search_light_f.png")
                  : theme.type == "default"
                  ? require("../../assets/search.png")
                  : require("../../assets/search_light.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/add.png")
                  : require("../../assets/add_light.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/heart_dark.png")
                    : require("../../assets/heart_light_f.png")
                  : theme.type == "default"
                  ? require("../../assets/heart.png")
                  : require("../../assets/heart_light.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileRoute}
        options={{
          tabBarIcon: ({ focused }) => (
            <Moment
              icon={require("../../assets/user2.jpg")}
              img_style={{ width: 30, height: 30 }}
              img_bg1_style={{
                width: 38,
                height: 38,
                backgroundColor: focused
                  ? theme.moment_top_bg
                  : theme.backgroundColor,
              }}
              img_bg2_style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
