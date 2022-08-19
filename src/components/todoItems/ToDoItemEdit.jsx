import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editToDo } from '../../store/slice/todoSlice';
import './ToDoItems.css'

function ToDoItemEdit({ todo }) {
  const [currentValue, setCurrentValue] = useState(todo.task);
  const dispatch = useDispatch();

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
    <form
      key={todo.id}
      onSubmit={onSubmit}
      className="todo-item">
      <input
        className="todo_edit"
        type="text"
        value={currentValue}
        onChange={onInpuChange}
        onBlur={onBlur}
        autoFocus
      />
    </form>
  );
}

export default ToDoItemEdit;
