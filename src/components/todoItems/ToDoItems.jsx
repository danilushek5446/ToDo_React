import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editToDo, setEditable } from '../../app/slice/todoSlice';
import './ToDoItems.css'

function ToDoItems({ todo, removeTask, toggleCheck }) {
  const [currentValue, setCurrentValue] = useState(todo.task);
  const dispatch = useDispatch();
  if (!todo.edit) {
    const makeEditableTodo = () => {
      dispatch(setEditable(todo.id));
    }
    const deleteTask = () => {
      removeTask(todo.id);
    }

    return (
      <div key={todo.id} className='todo-item'>
        <input
          className='toggle'
          type="checkbox"
          onChange={() => toggleCheck(todo.id)}
          checked={todo.complete}
        />
        <label htmlFor='toggle' className='label-checkbox'></label>
        <span className='todo-item__text' onDoubleClick={makeEditableTodo}>{todo.task}</span>
        <button className='destroy' onClick={deleteTask}>x</button>
      </div>
    );
  } else {

    const onInpuChange = (event) => {
      setCurrentValue(event.target.value)
    };

    const onSubmit = (event) => {
      event.preventDefault();
      dispatch(editToDo({
        id: todo.id,
        value: currentValue,
      }));
    }

    const onBlur = () => {
      dispatch(editToDo({
        id: todo.id,
        value: currentValue,
      }));
    }

    return (
      <form key={todo.id} onSubmit={onSubmit} className='todo-item'>
        <input
          className='todo_edit'
          type='text'
          value={currentValue}
          onChange={onInpuChange}
          onBlur={onBlur}
          autoFocus
        />
      </form>
    );
  }
}

export default ToDoItems;
