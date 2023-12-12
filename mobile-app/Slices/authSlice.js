import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { email, password, name } = action.payload;

      state.user = { email, name };
      state.isAuthenticated = true
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
})


export const { loginUser, logoutUser } = authSlice.actions

export const selectUser = (state) => state.auth.user

export default authSlice.reducer