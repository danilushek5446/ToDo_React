export interface todoItem {
  id: number;
  task: string;
  complete: boolean;
  edit: boolean;

}

export interface State {
  todoList: todoItem[];
  filter: string;
}

export interface changeTodo {
  id: number;
  value: string;
}