import React from 'react';
import classes from './FriendCard.module.css';

const FriendCard = (props) => {
  return (
      <div className={classes['card-control']}>
        {props.name} {props.age}
        <div className={classes['btn-control']}>
          <button type="button" onClick={props.deleteItem}>Delete</button>
        </div>
      </div>
  );
};

export default FriendCard;