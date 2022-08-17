import React from 'react';
import Todo from '../Models/todo';
import TodoItem from './TodoItem';

type propType = {
  items: Todo[],
  onDeleteTodo: (it: string) => void
};

const Todos: React.FC<propType> = (props) => {
  return (<ul>
    {props.items.map(item => (
        <TodoItem item={item} onDelete={() => props.onDeleteTodo(item.id)}/>),
    )}
  </ul>);
};

export default Todos;