import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoFooter from '../todoFooter/ToDoFooter';
import ToDoInput from '../todoInput/ToDoInput';
import { addToDo, changeCompletion, removeToDo } from '../../store/slice/todoSlice';
import { selectTodoByFilter } from '../../store/slice/selectors';
import ToDoItemEdit from '../todoItems/ToDoItemEdit';
import ToDoItemNoEdit from '../todoItems/ToDoItemNoEdit';
import { todoItem } from '../../Interfaces';
import { selectAllTodos } from '../../store/slice/selectors';
import { StyledToDoFormDiv, StyledTodoTitleDiv } from './ToDoForm.styles';

const ToDoForm: React.FC = () => {

  const dispatch = useDispatch();
  const toDos: todoItem[] = useSelector(selectTodoByFilter)
  const allToDos: todoItem[] = useSelector(selectAllTodos);

  const addNewToDo = (inputValue: string) => {
    if (!inputValue) {
      return;
    }
    dispatch(addToDo(inputValue));
  };

  const removeTask = (id: number) => {
    dispatch(removeToDo(id));
  };

  const toggleCheck = (id: number) => {
    dispatch(changeCompletion(id));
  };

  return (
    <StyledToDoFormDiv className="todo-app">
      <StyledTodoTitleDiv className="todo-title">todos</StyledTodoTitleDiv>
      <ToDoInput
        todos={toDos}
        addToDo={addNewToDo}
      />
      {toDos.map((todo) => {
        return (
          todo.edit ?
            <ToDoItemEdit
              todo={todo}
              key={todo.id}
            />
            :
            <ToDoItemNoEdit
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
              toggleCheck={toggleCheck}
            />
        )
      })}
      {allToDos.length !== 0 && <ToDoFooter />}
    </StyledToDoFormDiv>
  );
}

export default ToDoForm;
