import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
import { BACKEND_URL } from '../env';

const initialState = {
  cart: [],
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart: (state, action) => {
      const { cart, count } = action.payload;
      state.cart = cart;
      state.count = count;
    },
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

const cartURL = `${BACKEND_URL}/cart.json`;

cartSlice.actions.sendCartData = (cart) => async (dispatch) => {

  dispatch(uiActions.showNotification({
    title: 'Saving',
    status: 'success',
    message: 'Saving cart data to the server.',
  }));

  const response = await fetch(cartURL, {
    method: 'PUT',
    body: JSON.stringify(cart),
  });

  if (!response.ok) {
    dispatch(uiActions.showNotification({
      title: 'Failed saving data',
      status: 'error',
      message: 'Oops, something went wrong while trying to save the data to the server',
    }));
    return;
  }

  dispatch(uiActions.showNotification({
    title: 'Saved',
    status: 'success',
    message: 'Successfully saved cart to server.',
  }));
};

cartSlice.actions.fetchCartData = () => async (dispatch) => {
  const fetchCartDataHelper = async () => {
    const response = await fetch(cartURL);
    if (!response.ok) {
      throw new Error('Error fetching cart data from backend.');
    }

    const cart = await response.json();
    dispatch(cartActions.replaceCart({
      cart: cart,
      count: cart.reduce((total, element) => total + element.quantity, 0),
    }));
  };

  dispatch(uiActions.showNotification({
    title: 'Loading cart',
    status: 'success',
    message: 'Loading cart data',
  }));

  try {
    await fetchCartDataHelper();
    dispatch(uiActions.showNotification({
      title: 'Loading successful',
      status: 'success',
      message: 'Successfully loaded cart data',
    }));
  } catch (err) {
    dispatch(uiActions.showNotification({
      title: 'Loading failed',
      status: 'error',
      message: 'An error has occurred while loading cart data',
    }));
  }

};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;