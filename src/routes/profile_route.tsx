import React, { useEffect } from "react";
import { Dimensions, Image, TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../profile";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../redux/colorReducer";

const Drawer = createDrawerNavigator();

const SettingsIcon = () => {
  const theme = useSelector((state: any) => state.theme);

  const dispatch = useDispatch();
  const logoutFunction = () => {
    if (theme.backgroundColor == "#fff") {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  };

  return (
    <TouchableOpacity
      onPress={() => logoutFunction()}
      style={[
        {
          flexDirection: "row",

          width: "100%",
          alignItems: "center",
        },
      ]}
    >
      <Image
        source={
          theme.type == "default"
            ? require("../../assets/settings_icon.png")
            : require("../../assets/settings_icon_dark.png")
        }
      />

      <Text style={{ marginLeft: 30, color: theme.textColor }}>Settings</Text>
    </TouchableOpacity>
  );
};
// function Settings({ navigation }: any) {
//   const theme = useSelector((state: any) => state.theme);

//   useEffect(() => {
//     if (theme.backgroundColor == "#fff") {
//       dispatch(darkMode());
//     } else {
//       dispatch(darkMode());
//     }
//   }, []);
//   return <Profile navigation={navigation} />;
// }

export default function ProfileRoute() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerContentStyle: { backgroundColor: theme.backgroundColor },
        drawerInactiveTintColor: theme.textColor,
        drawerActiveTintColor: theme.textColor,
      }}
    >
      <Drawer.Screen name="s.khasanov_" component={Profile} />
      <Drawer.Screen
        name="Archive"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/archive_icon.png")
                  : require("../../assets/archive_icon_dark.png")
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Your Activity"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/your_activity.png")
                  : require("../../assets/your_activity_dark.png")
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Nametag"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/nametag_icon.png")
                  : require("../../assets/nametag_icon_dark.png")
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Saved"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/saved_icon.png")
                  : require("../../assets/saved_icon_dark.png")
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Close Friends"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/close_friends.png")
                  : require("../../assets/close_friends_dark.png")
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Discover People"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/discover_people.png")
                  : require("../../assets/discover_people_dark.png")
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Open Facebook"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={
                theme.type == "default"
                  ? require("../../assets/facebook.png")
                  : require("../../assets/facebook_dark.png")
              }
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Profile}
        options={{
          drawerItemStyle: {
            marginTop: Dimensions.get("screen").height / 3.5,
          },
          drawerIcon: () => <SettingsIcon />,
        }}
      />
    </Drawer.Navigator>
  );
}
