import { createSlice } from "@reduxjs/toolkit";

function getLocalUserData() {
  const savedUserData = localStorage.getItem("userData");

  if (savedUserData) {
    const parsedUserData = JSON.parse(savedUserData);
    return parsedUserData;
  } else {
    return {};
  }
}

function getLocalToken() {
  const savedToken = localStorage.getItem("token");
  return savedToken ?? null;
}

const initialState = {
  userData: getLocalUserData(),
  token: getLocalToken(),
  isLogin: getLocalToken() != null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handlerAfterLogin(state, action) {
      state.userData = action.payload;
      state.token = action.payload.token;
      localStorage.setItem("userData", JSON.stringify(action.payload));
      localStorage.setItem("token", action.payload.token);
      state.isLogin = action.payload.token ? action.payload.token : null;
    },

    logout(state) {
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      state.userData = {};
      state.token = null;
      state.isLogin = false;
    },
  },
});

export const { handlerAfterLogin, logout } = authSlice.actions;

export default authSlice.reducer;
