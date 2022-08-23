import React, { useMemo } from 'react';
import { changeFilter, deleteAllCompleted } from '../../store/slice/todoSlice';
import { selectAllTodos, selectActiveFilter } from "../../store/slice/selectors";
import { StyledFiltersDiv, StyledFooterCountSpan, StyledFooterDiv, StyledDeleteAllButton, StyledFooterContainerDiv } from './ToDoFooter.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ToDoFooter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectActiveFilter);
  const todos = useAppSelector(selectAllTodos)
  const countActive = useMemo(() => {
    return todos.filter(element => !element.complete).length;
  }, [todos])

  const countComplited = todos.length - countActive;

  return (
    <StyledFooterContainerDiv className="footer-container">
      <StyledFooterDiv className="footer">
        <StyledFooterCountSpan className="todo-count">{countActive} item left</StyledFooterCountSpan>
        <StyledFiltersDiv className="filters">
          <button className={filter === "all" ? "active" : ""}
            onClick={() => dispatch(changeFilter("all"))}>All
          </button>
          <button className={filter === "active" ? "active" : ""}
            onClick={() => dispatch(changeFilter("active"))}>Active
          </button>
          <button className={filter === "completed" ? "active" : ""}
            onClick={() => dispatch(changeFilter("completed"))}>Completed
          </button>
        </StyledFiltersDiv>
        {
          countComplited > 0
          &&
          <StyledDeleteAllButton className="delete-all" onClick={() => dispatch(deleteAllCompleted())}>Clear completed </StyledDeleteAllButton>
        }
      </StyledFooterDiv>
    </StyledFooterContainerDiv>
  );
}

export default ToDoFooter;
