import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BACKEND_URL } from './env';

const cartURL = `${BACKEND_URL}/cart.json`;

function App() {

  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    fetch(cartURL, {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  const isCartShown = useSelector(state => state.ui.isCartShown);
  return (
      <Layout>
        {isCartShown && <Cart/>}
        <Products/>
      </Layout>
  );
}

export default App;
