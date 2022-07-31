import React from 'react';
import style from './Meal.module.css';

const Meal = ({ name, description, price }) => {
  return (<li className={`list-group-item ${style['meal-item']}`}>

    <div className={style['description-container']}>
      <h2>{name}</h2>
      <it>{description}</it>
      <p className={style['price']}>{price} $</p>
    </div>

    <div className={style['control-container']}>
      Amount: <input type='number'/>
      <br/>
      <button className={`btn btn-success`}>Add to Cart</button>
    </div>
  </li>);
};

export default Meal;