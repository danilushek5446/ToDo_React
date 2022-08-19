import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoFooter from '../todoFooter/ToDoFooter';
import ToDoInput from '../todoInput/ToDoInput';
import ToDoItems from '../todoItems/ToDoItems';
import { addToDo, changeCompletion, removeToDo } from '../../app/slice/todoSlice'
import { selectTodoByFilter } from '../../app/slice/selectors';
import './ToDoForm.css'

function ToDoForm() {

  const dispatch = useDispatch();
  const toDo = useSelector(selectTodoByFilter)
  const allToDo = useSelector(state => state.todo.todoList);

  const addNewToDo = (inputValue) => {
    if (inputValue) {
      dispatch(addToDo(inputValue));
    }
  };

  const removeTask = (id) => {
    dispatch(removeToDo(id));
  };

  const toggleCheck = (id) => {
    dispatch(changeCompletion(id));
  };

  return (
    <div className="todo-app">
      <div className='todo-title'>todos</div>
      <ToDoInput
        todo={toDo}
        addToDo={addNewToDo}
      />
      {toDo.map((todo) => {
        return (
          <ToDoItems
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            toggleCheck={toggleCheck}
          />
        )
      })}
      {allToDo.length !== 0 && <ToDoFooter />}
    </div>
  );
}

export default ToDoForm;
