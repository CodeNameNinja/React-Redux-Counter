import { createStore } from "redux";

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const defaultState = {
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  if (action.type === actions.INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === actions.DECREMENT) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;