import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import actions from "../store/actions";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispatch({ type: actions.INCREMENT });
  };

  const increaceHandler = () => {
    dispatch({ type: actions.INCREASE, amount: 5 });
  };

  const decementHandler = () => {
    dispatch({ type: actions.DECREMENT });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: actions.TOGGLE_COUNTER });
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
