import React from 'react';
import classes from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
      <li className={classes['card-control']}>
        {props.name} {props.age}
        <div className={classes['btn-control']}>
          <button type="button" onClick={props.deleteItem}>Delete</button>
        </div>
      </li>
  );
};

export default FriendItem;