import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bottom from "./bottom";
import EditProfile from "../editprofile";
import { StatusBar } from "expo-status-bar";
import Login from "../login";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Login} />
      <Stack.Screen name="Tab" component={Bottom} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
    </Stack.Navigator>
  );
}
