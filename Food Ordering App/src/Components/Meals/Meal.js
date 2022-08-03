import React, { useContext, useState } from 'react';
import style from './Meal.module.css';
import cartContext from '../../Context/cart-context';

const Meal = ({ id, name, description, price }) => {

  const { addToCart } = useContext(cartContext);

  const [amount, setAmount] = useState('0');

  const handleAddToCart = () => {
    const amountToNumber = parseInt(amount);
    addToCart({ id, amount: amountToNumber });
  };

  return (<li className={`list-group-item ${style['meal-item']}`}>

    <div className={style['description-container']}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className={style['price']}>{price} $</p>
    </div>

    <div className={style['control-container']}>
      Amount: <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <br/>
      <button className={`btn btn-success`} type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  </li>);
};

export default Meal;