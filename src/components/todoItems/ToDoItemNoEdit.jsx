import React from 'react';
import { useDispatch } from 'react-redux';
import { setEditable } from '../../store/slice/todoSlice';
import './ToDoItems.css'

function ToDoItemNoEdit({ todo, removeTask, toggleCheck }) {
  const dispatch = useDispatch();
  const makeEditableTodo = () => {
    dispatch(setEditable(todo.id));
  }

  const deleteTask = () => {
    removeTask(todo.id);
  }

  const changeCheck = () => {
    toggleCheck(todo.id);
  }

  return (
    <div key={todo.id} className="todo-item">
      <input
        className="toggle"
        type="checkbox"
        onChange={changeCheck}
        checked={todo.complete}
      />
      <label htmlFor="toggle" className="label-checkbox"></label>
      <span className="todo-item__text" onDoubleClick={makeEditableTodo}>{todo.task}</span>
      <button className="destroy" onClick={deleteTask}>x</button>
    </div>
  );

}

export default ToDoItemNoEdit;
