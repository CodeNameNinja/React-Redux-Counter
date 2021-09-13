import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
    isAuthenticated: false,
  };
  
export const authSlice = createSlice({
    name: "authentication",
    initialState: initalAuthState,
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });