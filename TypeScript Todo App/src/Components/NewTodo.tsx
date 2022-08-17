import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (title: string) => void }> = ({ onAddTodo }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = inputRef.current!.value;
    if (inputText.trim().length === 0) {
      return;
    }
    onAddTodo(inputText);
  };

  return (<form onSubmit={submitHandler}>
    <label>Text:
      <input type={'text'} ref={inputRef}/>
    </label>
    <button>add</button>
  </form>);
};

export default NewTodo;