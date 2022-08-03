import { createContext } from 'react';

const defaultValue = {
  cart: [],
  setCart: () => {
  },
  countMeal: () => {
  },
  addToCart: () => {
  },
};

const CartContext = createContext(defaultValue);

export default CartContext;