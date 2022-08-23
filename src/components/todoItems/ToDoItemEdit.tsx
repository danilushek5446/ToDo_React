import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editToDo } from '../../store/slice/todoSlice';
import { todoItem } from '../../Interfaces';
import { StyledTodoItemForm, StyledToDoTextInput } from './ToDoItems.styles';

type PropTypes = {
  todo: todoItem;
};

const ToDoItemEdit: React.FC<PropTypes> = ({ todo }) => {
  const [currentValue, setCurrentValue] = useState(todo.task);
  const dispatch = useDispatch();

  const onInpuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value)
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <StyledTodoItemForm
      key={todo.id}
      onSubmit={onSubmit}
      className="todo-item">
      <StyledToDoTextInput
        className="todo_edit"
        type="text"
        value={currentValue}
        onChange={onInpuChange}
        onBlur={onBlur}
        autoFocus
      />
    </StyledTodoItemForm>
  );
}

export default ToDoItemEdit;
