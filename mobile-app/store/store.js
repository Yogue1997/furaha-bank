import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slices/counterSlice";
import authReducer from "../Slices/authSlice"

// counterSlice

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: authReducer,
  },
});
