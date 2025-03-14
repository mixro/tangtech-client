import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "client",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
      //LOGIN
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

      //REGISTER
    registerStart: (state) => {
        state.isFetching = true;
    },
    registerSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.isFetching = false;
        state.error = false;
    },
    registerError: (state) => {
        state.error = true;
    },

      //LOGOUT
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  registerStart,
  registerSuccess,
  registerError,
  logout
} = userSlice.actions;
export default userSlice.reducer;
