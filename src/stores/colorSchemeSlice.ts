import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const colorSchemes = [
  "theme-1",
  "default",
  "theme-2",
  "theme-3",
  "theme-4",
] as const;

export type ColorSchemes = (typeof colorSchemes)[number];

interface ColorSchemeState {
  value: ColorSchemes;
}

const getColorScheme = () => {
  const colorScheme = localStorage.getItem("colorScheme");
  return colorSchemes.filter((item, key) => {
    return item === colorScheme;
  })[0];
};

const initialState: ColorSchemeState = {
  value: "theme-1",
  // localStorage.getItem("colorScheme") === null ? "theme-1" : getColorScheme(),
  // localStorage.getItem("colorScheme") === null ? "default" : getColorScheme(),
};

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemes>) => {
      localStorage.setItem("colorScheme", "theme-1");
      state.value = "theme-1";
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => {
  if (localStorage.getItem("colorScheme") === null) {
    localStorage.setItem("colorScheme", "theme-1");
  }

  return "theme-1";
};

export default colorSchemeSlice.reducer;
