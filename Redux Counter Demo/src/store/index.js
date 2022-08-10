import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter
    }
  }
})


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export const counterActions = counterSlice.actions;
export default store;