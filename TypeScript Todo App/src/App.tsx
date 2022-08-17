import React, { useState } from 'react';
import Todos from './Components/Todos';
import Todo from './Models/todo';
import NewTodo from './Components/NewTodo';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (title: string) => {
    const newItem = new Todo(title);
    setTodos(prev => [newItem, ...prev]);
  };

  const onDeleteTodo = (id: string) => {
    setTodos(todos.filter(item => item.id !== id));
  }

  return (
      <div>
        <NewTodo onAddTodo={onAddTodo}/>
        <Todos items={todos} onDeleteTodo={onDeleteTodo}/>
      </div>
  );
};

export default App;
