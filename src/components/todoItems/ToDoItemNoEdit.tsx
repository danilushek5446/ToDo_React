import React from 'react';
import { setEditable } from '../../store/slice/todoSlice';
import { todoItem } from '../../Interfaces';
import { StyledCheckboxLabel, StyledDestroyButton, StyledTodoItemDiv, StyledTodoItemSpan, StyledToggleInput } from './ToDoItems.styles';
import { useAppDispatch } from '../../store/hooks';

type PropTypes = {
  todo: todoItem;
  removeTask(id: number): void;
  toggleCheck(id: number): void;
};

const ToDoItemNoEdit: React.FC<PropTypes>  = ({ todo, removeTask, toggleCheck }) => {
  const dispatch = useAppDispatch();
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
    <StyledTodoItemDiv
    checked={todo.complete}
    key={todo.id} 
    className="todo-item">
      <StyledToggleInput
        className="toggle"
        type="checkbox"
        onChange={changeCheck}
        checked={todo.complete}
      />
      <StyledCheckboxLabel htmlFor="toggle" className="label-checkbox"></StyledCheckboxLabel>
      <StyledTodoItemSpan className="todo-item__text" onDoubleClick={makeEditableTodo}>{todo.task}</StyledTodoItemSpan>
      <StyledDestroyButton className="destroy" onClick={deleteTask}>x</StyledDestroyButton>
    </StyledTodoItemDiv>
  );

}

export default ToDoItemNoEdit;
