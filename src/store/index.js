import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import actions from "./actions";

const initialState = {
  counter: 0,
  showCounter: false,
};

createSlice({
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

const counterReducer = (state = initialState, action) => {
  if (action.type === actions.INCREMENT) {
    return {
      showCounter: state.showCounter,
      counter: state.counter + 1,
    };
  }
  if (action.type === actions.INCREASE) {
    return {
      showCounter: state.showCounter,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === actions.DECREMENT) {
    return {
      showCounter: state.showCounter,
      counter: state.counter - 1,
    };
  }
  if (action.type === actions.TOGGLE_COUNTER) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
