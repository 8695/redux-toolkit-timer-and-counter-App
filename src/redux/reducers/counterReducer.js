import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={ count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState:INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      ++state.count
    },
    decrementCounter: (state) => {
      --state.count 
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;

export const counterReducer= counterSlice.reducer;
