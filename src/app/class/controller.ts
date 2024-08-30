// outsource dependencies
import axios from 'axios';
import { Dispatch } from 'redux';

enum ACTION_TYPE {
  UPDATE = 'APP/UPDATE',
  DELETE_TODO = 'APP/DELETE_TODO',
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface State {
    loading: boolean;
    error: string | null;
    data: Array<Todo> | null;
}

interface UpdateAction {
    type: ACTION_TYPE.UPDATE;
    payload:Partial<State>
}
interface DeleteTodoAction {
    type: ACTION_TYPE.DELETE_TODO;
    payload: number
}

type Action = UpdateAction | DeleteTodoAction

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

const reducer = (state: State = initialState, action:Action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE:
      return { ...state, ...action.payload };
    case ACTION_TYPE.DELETE_TODO:
      return { ...state, data: (state.data || []).filter(item => item.id !== action.payload) };
    default: return state;
  }
};

export default reducer;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch<{type: ACTION_TYPE.UPDATE, payload: {loading: boolean}}>({ type: ACTION_TYPE.UPDATE, payload: { loading: true } });
    try {
      const response = await axios<Array<Todo>>({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos',
      });
      dispatch<{type: ACTION_TYPE.UPDATE, payload: {data: Array<Todo>}}>({ type: ACTION_TYPE.UPDATE, payload: { data: response.data } });
    } catch (error) {
      console.error(error);
      dispatch<{type: ACTION_TYPE.UPDATE, payload: {error: string}}>({ type: ACTION_TYPE.UPDATE, payload: { error: 'Something went wrong' } });
    }
    dispatch<{type: ACTION_TYPE.UPDATE, payload: {loading: boolean}}>({ type: ACTION_TYPE.UPDATE, payload: { loading: false } });
  };
};

export const deleteTodo = (payload:number) => ({ type: ACTION_TYPE.DELETE_TODO, payload });
