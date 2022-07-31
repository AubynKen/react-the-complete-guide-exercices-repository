import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={`${style.navbar} navbar`}>
        <div className={style.title}>
          <h1>Food Order App</h1>
        </div>
        <div className={style['btn-container']}>
          <button className={`btn btn-warning`}>Login</button>
        </div>
      </nav>
  );
};

export default Navbar;