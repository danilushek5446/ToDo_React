import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../app/slice/filterSlice';
import { deleteAllCompleted } from '../../app/slice/todoSlice'
import './ToDoFooter.css'

function ToDoFooter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const todos = useSelector(state => state.todo.todoList)
  const countActive = todos.filter(element => !element.complete).length;
  const countComplited = todos.length - countActive;

  return (
    <div className="footer">
      <span className='todo-count'>{countActive} item left</span>
      <div className='filters'>
        <button className={filter === 'all' ? 'active' : ''} onClick={() => dispatch(changeFilter('all'))}>All</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => dispatch(changeFilter('active'))}>Active</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => dispatch(changeFilter('completed'))}>Completed</button>
      </div>
      {
        countComplited > 0 && <button className='delete-all' onClick={() => dispatch(deleteAllCompleted())}>Delete all completed</button>
      }
    </div>
  );
}

export default ToDoFooter;
