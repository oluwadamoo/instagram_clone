import { View, Text } from "react-native";
import React from "react";
import Activity_tab from "./routes/activity_tab";
import { useSelector } from "react-redux";

export default function Activity() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: theme.navColor, height: 30 }} />
      <Activity_tab />
    </View>
  );
}
