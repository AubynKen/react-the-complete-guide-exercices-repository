import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const itemFound = state.cart.find(item => item.id === itemToAdd.id);
      if (!itemFound) {
        const { id, title, description, price } = itemToAdd;
        state.cart.push({
          id, title, description, price,
          quantity: 1,
          total: price,
        });
      } else {
        itemFound.quantity += 1;
        itemFound.total += itemFound.price;
      }
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      const itemFound = state.cart.find(item => item.id === itemToRemove.id);
      if (!itemFound) return;
      if (itemFound.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== itemToRemove.id);
      } else {
        itemFound.quantity -= 1;
        itemFound.total -= itemFound.price;
      }
      state.count -= 1;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;