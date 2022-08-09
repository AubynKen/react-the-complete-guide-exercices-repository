import { legacy_createStore } from 'redux';

const createStore = legacy_createStore;

const defaultState = { counter: 0 };

const reducer = (state = defaultState, action) => {
  const { counter } = state;
  const { type } = action;
  switch (type) {
    case 'increment':
      return {
        counter: counter + 1,
      };
    case 'decrement':
      return {
        counter: counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;