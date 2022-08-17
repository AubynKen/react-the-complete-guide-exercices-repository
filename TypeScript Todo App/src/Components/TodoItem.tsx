import React from 'react';
import Todo from '../Models/todo';

const TodoItem: React.FC<{ item: Todo, onDelete: () => void }> = ({ item , onDelete}) => {
  return <li onClick={onDelete}>{item.title}</li>;
};

export default TodoItem;