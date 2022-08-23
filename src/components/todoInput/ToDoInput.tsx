import React, { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkAll } from '../../store/slice/todoSlice';
import { todoItem } from '../../Interfaces';
import { StyledNewToDoInput, StyledToDoInputForm, StyledToDoTogleAllInput, StyledToDoTogleAllLabel } from './ToDoInput.styles';

type PropTypes = {
  todos: todoItem[];
  addToDo(value: string): void;
};

const ToDoInput: React.FC<PropTypes> = ({ todos, addToDo }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const isCheked = useMemo(() => {
    return todos.every(element => element.complete)
  }, [todos]);

  const onInpuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDo(input);
    setInput('');
  }

  const checkAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(checkAll(event.target.checked))
  }

  return (
    <StyledToDoInputForm
      isChecked={isCheked}
      className="todo-input"
      onSubmit={onSubmit}
    >
      <StyledToDoTogleAllInput
        type="checkbox"
        className="togle-all"
        checked={isCheked}
        onChange={checkAllChange}
      />
      {(todos.length !== 0) && <StyledToDoTogleAllLabel htmlFor="togle-all" className="togle-all-label">❯</StyledToDoTogleAllLabel>}
      <StyledNewToDoInput
        className="new-todo"
        value={input}
        type="text"
        placeholder="What needs to be done?"
        onChange={onInpuChange}
      />
    </StyledToDoInputForm>
  );
}

export default ToDoInput;
