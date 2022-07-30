import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "theme",
  initialState: {
    type: "default",
    backgroundColor: "#fff",
    navColor: "#f7f7f7",
    textColor: "#4d4d4d",
    moment_top_bg: "#d6d6d6",
    moment_inner_bg: "#fff",
    btn_color: "#fff",
    inputColor: "#f7f5f5",
  },
  reducers: {
    darkMode: (state) => {
      (state.type = "dark"),
        (state.backgroundColor = "#0c0c0c"),
        (state.navColor = "#121212"),
        (state.textColor = "#fff"),
        (state.moment_top_bg = "#48484A"),
        (state.btn_color = "#000"),
        (state.moment_inner_bg = "#000"),
        (state.inputColor = "#121212");
    },
    lightMode: (state) => {
      (state.type = "default"),
        (state.backgroundColor = "#fff"),
        (state.navColor = "#f7f7f7"),
        (state.textColor = "#4d4d4d"),
        (state.moment_top_bg = "#d6d6d6"),
        (state.btn_color = "#fff"),
        (state.moment_inner_bg = "#fff"),
        (state.inputColor = "#f7f5f5");
    },
  },
});

export const { darkMode, lightMode } = colorSlice.actions;
export default colorSlice.reducer;
