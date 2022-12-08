import { AnyAction } from 'redux';
import { ADD_TODO, EDIT_TASK, ITask } from "./action";

export interface iTaskState {
  todos: ITask[]
}
const initialState: iTaskState = {
  todos: []
};

const todoReducer = (state = initialState, action: AnyAction): iTaskState => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case EDIT_TASK: {
      const { completed, id } = action.payload;
      return {
        ...state,
        todos: [...state.todos.map(todo => todo.id === id ? { ...todo, completed } : todo)]
      };
    }
    default:
      return state;
  }
}

export default todoReducer;