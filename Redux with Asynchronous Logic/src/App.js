import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cartActions } from './store/cart-slice';

let firstRender = true;
let newData = false; // fetching existing cart data from backend is not considered new data

function App() {

  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.fetchCartData());
  }, [])

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    } else if (!newData) {
      newData = true;
      return;
    }
    dispatch(cartActions.sendCartData(cart));
  }, [cart, dispatch]);

  const isCartShown = useSelector(state => state.ui.isCartShown);
  return (
      <Layout>
        {isCartShown && <Cart/>}
        <Products/>
      </Layout>
  );
}

export default App;
