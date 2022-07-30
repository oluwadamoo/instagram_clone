import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Button from "./button";
import { useSelector } from "react-redux";
export default function Login({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigate = () => {
    navigation.push("Tab");
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.wrapper}>
        <Image
          source={
            theme.type == "default"
              ? require("../assets/logo.png")
              : require("../assets/logo_light.png")
          }
          style={styles.logo}
        />
        <View style={styles.form}>
          <View
            style={[styles.input_cont, { backgroundColor: theme.inputColor }]}
          >
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={[styles.input]}
              placeholderTextColor="#d7d7d7"
              placeholder="Username or Email"
            />
          </View>
          <View
            style={[styles.input_cont, { backgroundColor: theme.inputColor }]}
          >
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholder={"Password"}
              placeholderTextColor="#d7d7d7"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.forgot_cont}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
          <Button title="Log in" onClick={navigate} />
        </View>
        <View style={styles.signup_cont}>
          <Text style={[styles.signup_txt, { color: theme.textColor }]}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.signup}>Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footer_cont}>
          <Text style={[styles.footer_text, { color: theme.textColor }]}>
            Instagram or Facebook
          </Text>
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
  form: {
    marginTop: 30,
  },
  input_cont: {
    padding: 7,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "#e5e2e2",
    marginVertical: 6,
    backgroundColor: "#f7f5f5",
    borderRadius: 2,
  },
  input: {
    color: "#202020",
  },
  forgot_cont: {
    marginVertical: 10,
    marginBottom: 15,
    alignSelf: "flex-end",
  },
  forgot: {
    color: "#13a4e8",
    fontSize: 13,
  },

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
  signup_cont: {
    flexDirection: "row",
    marginTop: 50,
  },
  signup_txt: {
    color: "#b3b1b1",
  },
  signup: {
    color: "#13a4e8",
  },
});
