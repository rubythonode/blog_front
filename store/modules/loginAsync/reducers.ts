import {
  GET_LOGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
} from './actions';
import { LoginState, LoginActions, updateKey } from './types';
import { createReducer } from 'typesafe-actions';
import { asyncState } from '../../../lib/Utils/asyncUtils';

const initialState: LoginState = {
  email: '',
  password: '',
  msg: asyncState.initial(),
};

const login = createReducer<LoginState, LoginActions>(initialState, {
  [GET_LOGIN]: state => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_LOGIN_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});
export default login;
