import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, deleteAllCompleted } from '../../store/slice/todoSlice';
import { selectAllTodos, selectActiveFilter } from "../../store/slice/selectors";
import './ToDoFooter.css'

function ToDoFooter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectActiveFilter);
  const todos = useSelector(selectAllTodos)
  const countActive = useMemo(() => {
    return todos.filter(element => !element.complete).length;
  }, [todos])

  const countComplited = todos.length - countActive;

  return (
    <div className="footer">
      <span className="todo-count">{countActive} item left</span>
      <div className="filters">
        <button className={filter === "all" ? "active" : ""}
          onClick={() => dispatch(changeFilter("all"))}>All
        </button>
        <button className={filter === "active" ? "active" : ""}
          onClick={() => dispatch(changeFilter("active"))}>Active
        </button>
        <button className={filter === "completed" ? "active" : ""}
          onClick={() => dispatch(changeFilter("completed"))}>Completed
        </button>
      </div>
      {
        countComplited > 0 && <button className="delete-all" onClick={() => dispatch(deleteAllCompleted())}>Clear completed</button>
      }
    </div>
  );
}

export default ToDoFooter;
