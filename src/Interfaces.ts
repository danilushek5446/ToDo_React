export interface TodoItem {
  id: number;
  task: string;
  complete: boolean;
  edit: boolean;

}

export interface State {
  todoList: TodoItem[];
  filter: string;
}

export interface ChangeTodo {
  id: number;
  value: string;
}