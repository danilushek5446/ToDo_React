import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, deleteAllCompleted } from '../../store/slice/todoSlice';
import { selectAllTodos, selectActiveFilter } from "../../store/slice/selectors";
import { FiltersDiv, FooterCountSpan, FooterDiv, DeleteAllButton } from './ToDoFooter.styles';

function ToDoFooter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectActiveFilter);
  const todos = useSelector(selectAllTodos)
  const countActive = useMemo(() => {
    return todos.filter(element => !element.complete).length;
  }, [todos])

  const countComplited = todos.length - countActive;

  return (
    <FooterDiv className="footer">
      <FooterCountSpan className="todo-count">{countActive} item left</FooterCountSpan>
      <FiltersDiv className="filters">
        <button className={filter === "all" ? "active" : ""}
          onClick={() => dispatch(changeFilter("all"))}>All
        </button>
        <button className={filter === "active" ? "active" : ""}
          onClick={() => dispatch(changeFilter("active"))}>Active
        </button>
        <button className={filter === "completed" ? "active" : ""}
          onClick={() => dispatch(changeFilter("completed"))}>Completed
        </button>
      </FiltersDiv>
      {
        countComplited > 0
        &&
        <DeleteAllButton className="delete-all" onClick={() => dispatch(deleteAllCompleted())}>Clear completed </DeleteAllButton>
      }
    </FooterDiv>
  );
}

export default ToDoFooter;
