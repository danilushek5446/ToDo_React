import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoFooter from '../todoFooter/ToDoFooter';
import ToDoInput from '../todoInput/ToDoInput';
import { addToDo, changeCompletion, removeToDo } from '../../store/slice/todoSlice'
import { selectTodoByFilter } from '../../store/slice/selectors';
import './ToDoForm.css'
import ToDoItemEdit from '../todoItems/ToDoItemEdit';
import ToDoItemNoEdit from '../todoItems/ToDoItemNoEdit';

function ToDoForm() {

  const dispatch = useDispatch();
  const toDos = useSelector(selectTodoByFilter)
  const allToDos = useSelector(state => state.todo.todoList);

  const addNewToDo = (inputValue) => {
    if (!inputValue) {
      return;
    }
    dispatch(addToDo(inputValue));
  };

  const removeTask = (id) => {
    dispatch(removeToDo(id));
  };

  const toggleCheck = (id) => {
    dispatch(changeCompletion(id));
  };

  return (
    <div className="todo-app">
      <div className="todo-title">todos</div>
      <ToDoInput
        todo={toDos}
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
    </div>
  );
}

export default ToDoForm;
