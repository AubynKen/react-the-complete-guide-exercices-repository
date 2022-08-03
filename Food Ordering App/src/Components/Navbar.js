import React, {useContext} from 'react';
import style from './Navbar.module.css';
import cartContext from '../Context/cart-context';

const Navbar = () => {

  const { countMeal } = useContext(cartContext);

  return (
      <nav className={`${style.navbar} navbar`}>
        <div className={style.title}>
          <h1>Food Order App</h1>
        </div>
        <div className={style['btn-container']}>
          <button className={`btn btn-success ${style.btn}`}>Login</button>
          <button className={`btn btn-warning ${style.btn}`}>
            Cart <span className={`badge ${style.badge}`}>{countMeal()}</span>
          </button>
        </div>
      </nav>
  );
};

export default Navbar;