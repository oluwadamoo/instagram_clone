import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";
import Activity_sections from "./activity_sections";
import { SectionListData } from "react-native";
import { useSelector } from "react-redux";

export default function Activity_follow() {
  const theme = useSelector((state: any) => state.theme);

  const data: SectionListData<[], any> = [
    {
      id: 1,
      title: "New",
      data: [
        {
          id: 1,
          user: "karennne",
          message: "liked your photo",
          profile_pic:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          time: "1h",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          action: null,
        },
      ],
    },
    {
      id: 2,
      title: "Today",
      data: [
        {
          id: 1,
          user: "karennne",
          message: "liked your photo",
          profile_pic:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          time: "1h",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          action: null,
        },
      ],
    },

    {
      id: 3,
      title: "This Week",
      data: [
        {
          id: 1,
          user: "craig_love",
          message: "mentioned you in a comment: @jacob_w exactly..",
          profile_pic:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          time: "2d",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          action: null,
        },

        {
          id: 2,
          user: "martini_rond",
          message: "started following you.",
          profile_pic:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          time: "3d",
          image: null,
          action: "message",
        },

        {
          id: 3,
          user: "mis_potter",
          message: "started following you.",
          profile_pic:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          time: "3d",
          image: null,
          action: "follow",
        },
      ],
    },

    {
      id: 2,
      title: "This Month",
      data: [
        {
          id: 1,
          user: "karennne",
          message: "liked your photo",
          profile_pic:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

          time: "1h",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
      ],
    },
  ];

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.follow_r}>
        <Text style={[styles.follow_r_txt, { color: theme.textColor }]}>
          Follow Requests
        </Text>
      </View>

      <View style={styles.sections}>
        <SectionList
          sections={data}
          renderItem={({ item }) => <Activity_sections item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={[
                styles.section_title,
                { borderTopWidth: theme.type == "default" ? 0.5 : 0 },
              ]}
            >
              <Text style={[styles.title, { color: theme.textColor }]}>
                {title}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  follow_r: {
    borderBottomColor: "#c9c9c9",
    padding: 10,
    paddingHorizontal: 20,
    // borderBottomWidth: 0.5,
  },
  follow_r_txt: {
    color: "#262626ce",
  },
  sections: {
    // padding: 10,
    // paddingHorizontal: 20,
  },
  title: {
    color: "#121212",
    marginTop: 5,
  },
  section_title: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopColor: "#c9c9c9",
    borderTopWidth: 0.5,
  },
});
