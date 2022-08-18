import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editToDo, setEditable } from '../app/slice/todoSlice';

function ToDoItems({ todo, removeTask, toggleCheck }) {
  const [currentValue, setCurrentValue] = useState(todo.task);
  const dispatch = useDispatch();
  if (!todo.edit) {

    const makeEditableTodo = (id) => {
      dispatch(setEditable(id));
    }

    return (
      <div key={todo.id}>
        <input
          type="checkbox"
          onChange={() => toggleCheck(todo.id)}
          checked={todo.complete}
        />
        <span onDoubleClick={() => makeEditableTodo(todo.id)}>{todo.task}</span>
        <button onClick={() => removeTask(todo.id)}>x</button>
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

    return (
      <form key={todo.id} onSubmit={onSubmit}>
        <input
          type='text'
          value={currentValue}
          onChange={onInpuChange}
        />
      </form>
    );
  }
}

export default ToDoItems;
