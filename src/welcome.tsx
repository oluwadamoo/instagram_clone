import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Button from "./button";
export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View>
          <Button title="Log in" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footer_cont}>
          <Text style={styles.footer_text}>Don't have an account? </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.signup}>Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {},

  footer: {
    paddingTop: 14,
    marginTop: "auto",
    borderTopColor: "#d4d4d4",
    borderTopWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  footer_cont: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer_text: {
    color: "#b3b1b1",
    marginRight: 5,
  },
  signup: {
    color: "#202020",
  },
});
