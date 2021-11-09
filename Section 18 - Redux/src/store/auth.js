import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      console.log("logging in");
      state.isAuthenticated = true;
    },
    logout(state) {
      console.log("logging out");
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;