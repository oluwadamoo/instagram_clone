import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function EditProfile({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={[styles.header, { backgroundColor: theme.navColor }]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.cancel_txt, { color: theme.textColor }]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.textColor }]}>
          Edit Profile
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.done_txt}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profile_photo}>
        <Image source={require("../assets/user5.jpg")} style={styles.image} />
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.change_photo}>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Name
          </Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor={"#d7d7d7"}
            style={[styles.input, { color: theme.textColor }]}
            value={"Jacob West"}
          />
        </View>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Username
          </Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#d7d7d7"}
            style={[styles.input, { color: theme.textColor }]}
            value={"jacob_w"}
          />
        </View>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Website
          </Text>
          <TextInput
            placeholder="Website"
            placeholderTextColor={"#d7d7d7"}
            style={[styles.input, { color: theme.textColor }]}
          />
        </View>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Bio
          </Text>
          <TextInput
            placeholder="Bio"
            placeholderTextColor={"#d7d7d7"}
            style={[styles.input, { color: theme.textColor }]}
            value={"Digital goodies designer @pixsellz Everything is designed."}
            multiline
          />
        </View>
      </View>

      <View style={styles.private}>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.professional}>
            Switch to Professional Account
          </Text>
        </TouchableOpacity>
        <Text style={[styles.private_info_txt, { color: theme.textColor }]}>
          Private Information
        </Text>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Email
          </Text>
          <Text style={[styles.input, { color: theme.textColor }]}>
            jacob.west@gmail.com
          </Text>
        </View>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Phone
          </Text>
          <Text style={[styles.input, { color: theme.textColor }]}>
            +1 202 555 0147
          </Text>
        </View>
        <View style={styles.input_cont}>
          <Text style={[styles.input_txt, { color: theme.textColor }]}>
            Gender
          </Text>
          <Text style={[styles.input, { color: theme.textColor }]}>Male</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },
  header: {
    padding: 15,
    paddingTop: 30,
    backgroundColor: "#f7f7f7",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancel_txt: {
    color: "#383838",
  },
  title: {
    color: "#383838",
    fontWeight: "bold",
  },
  done_txt: {
    color: "#196dbb",
  },
  profile_photo: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  change_photo: {
    marginTop: 10,
    color: "#196dbb",
    fontSize: 13,
  },
  form: {
    paddingHorizontal: 15,
    borderBottomColor: "#f7f7f7",
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  input_cont: {
    flexDirection: "row",
    marginVertical: 12,
  },
  input_txt: {
    width: 100,
    color: "#383838",
  },
  input: {
    paddingRight: 40,
    color: "#383838",
  },
  private: {
    padding: 15,
  },
  professional: {
    marginVertical: 5,
    color: "#196dbb",
    marginBottom: 10,
  },
  private_info_txt: {
    marginVertical: 15,
    color: "#383838",
    fontWeight: "bold",
  },
});
