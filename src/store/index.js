import { createSlice, configureStore } from "@reduxjs/toolkit";
import actions from "./actions";

const initialState = {
  counter: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
