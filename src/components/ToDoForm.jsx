import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoFooter from './ToDoFooter';
import ToDoInput from './ToDoInput';
import ToDoItems from './ToDoItems';
import { addToDo, changeCompletion, removeToDo } from '../app/slice/todoSlice'
import { selectTodoByFilter } from '../app/slice/selectors';

function ToDoForm() {

  const dispatch = useDispatch();
  const toDo = useSelector(selectTodoByFilter)

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
    <div className="App">
      <div>ToDo</div>
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
      <ToDoFooter todo={toDo} />
    </div>
  );
}

export default ToDoForm;
