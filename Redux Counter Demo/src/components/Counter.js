import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => undefined;
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: 'increment',
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'decrement',
    });
  };

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <button className={classes.btn} onClick={handleIncrement}>Increment</button>
        <button className={classes.btn} onClick={handleDecrement}>Decrement</button>
        <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;
