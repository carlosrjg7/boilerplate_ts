import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState = {
  value: 10,
} as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (state: CounterState) => {
      state.value += 1; // Suma 1 si no se proporciona payload
    },
    Decrement: (state: CounterState) => {
      state.value -= 1; // Resta 1 si no se proporciona payload
    },
  },
});

export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;
