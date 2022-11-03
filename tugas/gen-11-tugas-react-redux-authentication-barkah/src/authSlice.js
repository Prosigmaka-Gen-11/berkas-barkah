import { createSlice } from "@reduxjs/toolkit";

// blm kepake pas refresh malah jadi undefined (pas refresh jadi error putih semua)
function getLocalUserData() {
  const savedUserData = localStorage.getItem("userData");

  if (savedUserData) {
    const parsedUserData = JSON.parse(savedUserData);
    return parsedUserData;
  } else {
    return {};
  }
}

// ini bisa terus pas refresh juga udah
function getLocalToken() {
  const savedToken = localStorage.getItem("token");
  return savedToken ?? null;
}

const initialState = {
  userData: {},
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
      localStorage.setItem("userData", JSON.stringify(action.payload.userData));
      localStorage.setItem("token", action.payload.token);
      state.isLogin = action.payload.token ? action.payload.token : null;
    },

    logout(state, action) {
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      state.userData = {};
      state.token = null;
    },
  },
});

export const { handlerAfterLogin, logout } = authSlice.actions;

export default authSlice.reducer;
