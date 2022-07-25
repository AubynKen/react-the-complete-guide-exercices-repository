import React, {useState} from 'react';
import classes from './App.module.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

const initialFriends = [
  {name: 'John Stewart', age: 16, id: '23489'},
  {name: 'Jackson Wang', age: 32, id: '23423'},
];

function App() {

  const [friends, setFriends] = useState(initialFriends);

  const deleteById = (id) => {
    setFriends(prevList => prevList.filter(item => item.id !== id));
  };

  const addFriend = (friendObj => {
    setFriends(prevList => [...prevList, friendObj]);
  });

  return (
      <div className={classes['main-window']}>
        <FriendForm addItem={addFriend}/>
        <FriendList items={friends} deleteById={deleteById}/>
      </div>
  );
}

export default App;
