import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {counterActions} from "../store/index"
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaceHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaceHandler}>Increment by 5</button>
          <button onClick={decementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
