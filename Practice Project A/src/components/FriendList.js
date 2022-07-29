import React from 'react';
import FriendItem from './FriendItem';

const FriendList = (props) => {
  return (<div>
    <ul>
      {props.items.map((item) =>
          <FriendItem
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