import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartShown: false,
  showNotification: false,
  notification: {
    status: '',
    title: '',
    message: '',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isCartShown = !state.isCartShown;
    },
    showNotification: (state, action) => {
      state.showNotification = true;
      state.notification.status = action.payload.status;
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
    },
    hideNotification: (state) => {
      state.showNotification = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;