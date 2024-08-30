// outsource dependencies
import axios from 'axios';
import { Dispatch } from 'redux';

enum ACTION_TYPE {
    UPDATE = 'FUNC/UPDATE',
}

export interface State {
    loading: boolean;
    error: string | null;
    data: Array<string> | null;
}

interface UpdateAction {
    type: ACTION_TYPE.UPDATE;
    payload:Partial<State>
}

type Action = UpdateAction

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

const reducer = (state: State = initialState, action:Action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE:
      return { ...state, ...action.payload };
    default: return state;
  }
};

export default reducer;

export const searchRepositories = (text: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<{type: ACTION_TYPE.UPDATE, payload: {loading: boolean}}>({ type: ACTION_TYPE.UPDATE, payload: { loading: true } });
    try {
      const { data } = await axios<{objects: Array<{ package: {name: string} }>}>({
        method: 'GET',
        params: { text },
        url: 'https://registry.npmjs.org/-/v1/search',
      });
      const result = data.objects.map(item => item.package.name);
      dispatch<{type: ACTION_TYPE.UPDATE, payload: {data: Array<string>}}>({ type: ACTION_TYPE.UPDATE, payload: { data: result } });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        dispatch<{type: ACTION_TYPE.UPDATE, payload: {error: string}}>({ type: ACTION_TYPE.UPDATE, payload: { error: error?.message || 'Something went wrong' } });
      }
    }
    dispatch<{type: ACTION_TYPE.UPDATE, payload: {loading: boolean}}>({ type: ACTION_TYPE.UPDATE, payload: { loading: false } });

  };
};
