import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getThemeFromStorage = () => {
  return localStorage.getItem("theme") === "true";
};

const getUserFromStorage = () => {
  const user = localStorage.getItem("user") || null;
  return JSON.parse(user);
};

const defaultState = {
  user: getUserFromStorage(),
  isDark: getThemeFromStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      // console.log(action.payload.response);
      const user = {
        token: action.payload.response.jwt,
        ...action.payload.response.user,
      };
      state.user = user;
      // save to localstorage
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state, action) => {
      state.user = null;

      localStorage.removeItem("user");
      toast.success("logged out successfully!");
    },
    toggleTheme: (state) => {
      state.isDark = !state.isDark;

      document.documentElement.setAttribute(
        "data-theme",
        state.isDark ? "dark" : "light"
      );

      localStorage.setItem("theme", state.isDark);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
