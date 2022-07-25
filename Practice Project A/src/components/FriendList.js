import React from 'react';
import FriendCard from './FriendCard';

const FriendList = (props) => {
  return (<div>
    <ul>
      {props.items.map((item) =>
          <FriendCard
              key={item.id}
              name={item.name}
              age={item.age}
              deleteItem={() => props.deleteById(item.id)}
          />
      )}
    </ul>
  </div>);
};

export default FriendList;