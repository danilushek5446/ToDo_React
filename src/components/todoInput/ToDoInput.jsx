import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkAll } from '../../app/slice/todoSlice';
import './ToDoInput.css'

function ToDoInput({ todo, addToDo }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  let isCheked = false;

  if (todo.filter(element => element.complete).length === todo.length && todo.length) {
    isCheked = true;
  }

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
      <input type="checkbox" className='togle-all' checked={isCheked} onChange={checkAllChange} />
      <label htmlFor="togle-all" className='togle-all-label'>❯</label>
      <input
        className='new-todo'
        value={input}
        type="text"
        placeholder='What needs to be done?'
        onChange={onInpuChange}
      />
    </form>
  );
}

export default ToDoInput;
