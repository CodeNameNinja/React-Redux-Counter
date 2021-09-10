import { createStore } from "redux";

const actions = {
  INCREMENT: "INCREMENT",
  INCREASE: "INCREASE",
  DECREMENT: "DECREMENT",
  TOGGLE_COUNTER: "TOGGLE_COUNTER",
};

const initialState = {
  counter: 0,
  showCounter: false,
};

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
