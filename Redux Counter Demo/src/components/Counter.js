import classes from './Counter.module.css';
import { useSelector } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => undefined;
  const counter = useSelector(state => state.counter);

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <button className={classes.btn}>Increment</button>
        <button className={classes.btn}>Decrement</button>
        <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;
