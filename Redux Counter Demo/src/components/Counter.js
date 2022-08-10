import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {

  const dispatch = useDispatch();
  const showCounter = useSelector(state => state.counter.showCounter);
  const counter = useSelector(state => state.counter.counter);

  const handleToggle = () => {
    dispatch(counterActions.toggle());
  }

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleToggle}>Toggle Counter</button>
      </main>
  );
};

export default Counter;
