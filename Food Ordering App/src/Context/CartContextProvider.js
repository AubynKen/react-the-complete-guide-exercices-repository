import CartContext from './cart-context';
import { useState } from 'react';

const DUMMY_CART = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    amount: 3,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    amount: 7,
  },
];

const CartContextProvider = (props) => {

  const [cart, setCart] = useState(DUMMY_CART);

  /* counts the total number of dishes in the cart */
  const countMeal = () => cart.reduce((acc, curr) => acc + curr.amount, 0);

  const addToCart = ({ id, amount }) => {
    const meal = cart.find((item) => item.id === id);
    /* if meal is found in cart */
    if (meal) {
      if (typeof amount !== 'number') {
        amount = parseInt(amount);
      }
      meal.amount += amount;
      setCart([...cart]);
      return;
    }
    /* if meal isn't in cart */
    setCart([
      { id, amount },
      ...cart,
    ]);
  };

  return (<CartContext.Provider value={{ cart, setCart, countMeal, addToCart }}>
    {props.children}
  </CartContext.Provider>);
};

export default CartContextProvider;