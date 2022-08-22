import React, { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkAll } from '../../store/slice/todoSlice';
import './ToDoInput.css'

function ToDoInput({ todo, addToDo }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const isCheked = useMemo(() => {
    return todo.every(element => element.complete)
  }, [todo]);

  const onInpuChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(input);
    setInput('');
  }

  const checkAllChange = (event) => {
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
