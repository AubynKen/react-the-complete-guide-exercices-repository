const { legacy_createStore: createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const DECREMENT = 'DECREMENT';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { count: state.count + payload };
    case DECREMENT:
      return { count: state.count - payload };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const subscriber = () => {
  console.log(store.getState());
};

store.subscribe(subscriber);

store.dispatch({
  type: INCREMENT,
  payload: 1,
});

store.dispatch({
  type: DECREMENT,
  payload: 2,
});

store.dispatch({
  type: RESET,
});