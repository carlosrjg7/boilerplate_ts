import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authState = {
  user: string;
  rol: string;
};

const initialState: authState = {
  user: "",
  rol: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: authState, action: PayloadAction<authState>) => {
      state.user = action.payload.user;
      state.rol = action.payload.rol;
    },
    logout: (state: authState) => {
      state.user = "";
      state.rol = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
