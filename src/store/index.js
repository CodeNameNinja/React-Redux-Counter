import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authReducer },
});


export default store;
