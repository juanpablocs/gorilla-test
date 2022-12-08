export const ADD_TODO = "ADD_TODO";
export const EDIT_TASK = "EDIT_TASK";

let todoId = 0;

export interface ITask {
  id?: number;
  name: string;
  completed: boolean;
};

interface IAddTodo {
  type: string;
  payload: Partial<ITask>;
}
export const addTodo = (task: ITask): IAddTodo => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    ...task
  }
});

export const editTask = (task: Partial<ITask>): IAddTodo => ({
  type: EDIT_TASK,
  payload: {
    id: ++todoId,
    ...task
  }
});