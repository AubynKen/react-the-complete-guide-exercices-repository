import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch();
  const handleAdd = () => dispatch(cartActions.addToCart(props.item));
  const handleRemove = () => dispatch(cartActions.removeFromCart(props.item));

  const { title, total, price, quantity } = props.item;

  return (
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={handleRemove}>-</button>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </li>
  );
};

export default CartItem;
