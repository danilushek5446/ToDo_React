import { createSelector } from "reselect"

export const selectAllTodos = state => state.todo.todoList
export const selectActiveFilter = state => state.filters

export const selectTodoByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodo, activeFilter) => {
    if (activeFilter === 'all') return allTodo;

    if (activeFilter === 'completed') {
      return allTodo.filter(todo => todo.complete)
    }

    return allTodo.filter(todo => !todo.complete)
  }
)
