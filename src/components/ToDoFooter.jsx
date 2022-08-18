import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../app/slice/filterSlice';
import { deleteAllCompleted } from '../app/slice/todoSlice'

function ToDoFooter({ todo }) {
  const dispatch = useDispatch();
  const countActive = todo.filter(element => !element.complete).length;
  const countComplited = todo.length - countActive;
  return (
    <div className="App">
      <span>{countActive} item left</span>
      <button onClick={() => dispatch(changeFilter('all'))}>All</button>
      <button onClick={() => dispatch(changeFilter('active'))}>Active</button>
      <button onClick={() => dispatch(changeFilter('completed'))}>Completed</button>
      {
        countComplited > 0 && <button onClick={() => dispatch(deleteAllCompleted())}>Delete all completed</button>
      }
    </div>
  );
}

export default ToDoFooter;
