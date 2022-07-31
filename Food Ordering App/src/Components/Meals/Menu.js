import React from 'react';
import style from './Menu.module.css';
import Meal from './Meal';

const Menu = ({ meals }) => {
  return (
      <ul className={`list-group ${style.menu}`}>
        {meals.map(({ name, description, price, id }) =>
            (<Meal name={name}
                   description={description}
                   price={price}
                   key={id}
            />),
        )}
      </ul>
  );
};

export default Menu;