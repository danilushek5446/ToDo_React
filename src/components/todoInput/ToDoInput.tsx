import React, { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkAll } from '../../store/slice/todoSlice';
import { todoItem } from '../../Interfaces';
import './ToDoInput.css'

type PropTypes = {
  todos: todoItem[];
  addToDo(value: string): void;
};

const ToDoInput: React.FC<PropTypes> = ({ todos, addToDo }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const isCheked = useMemo(() => {
    return todos.every(element => element.complete)
  }, [todos]);

  const onInpuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDo(input);
    setInput('');
  }

  const checkAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(checkAll(event.target.checked))
  }

  return (
    <form className="todo-input" onSubmit={onSubmit}>
      <input
        type="checkbox"
        className="togle-all"
        checked={isCheked}
        onChange={checkAllChange}
      />
      <label htmlFor="togle-all" className="togle-all-label">❯</label>
      <input
        className="new-todo"
        value={input}
        type="text"
        placeholder="What needs to be done?"
        onChange={onInpuChange}
      />
    </form>
  );
}

export default ToDoInput;
