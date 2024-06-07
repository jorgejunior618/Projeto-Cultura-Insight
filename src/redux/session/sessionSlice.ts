import { createSlice } from '@reduxjs/toolkit';

import reducers from './reducers';
import { DispatchType, UserSessionType } from '../reduxTypes';
import { message } from 'antd';
import initialState from './initialState';

import * as sessionServices from '@/services/session.services';

const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState,
  reducers,
})

const { setLogin, doLogout, setLoading } = sessionSlice.actions;

function login(username: string, password: string) {
  return async function (dispatch: DispatchType) {
    dispatch(setLoading(true));

    try {
      const user = await sessionServices.login(username, password);

      dispatch(setLogin(user));
    } catch (error) {
      console.log(`erro no login: ${error}`);
      console.log(error);
      if (Object.getOwnPropertyNames(error).includes('message')) {
        message.error(`${(error as any).message}`);
      } else {
        message.error('Não foi possível entrar, tente novamente');
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
}

function logout() {
  return async function (dispatch: DispatchType) {
    dispatch(setLoading(true));

    try {
      const success = await sessionServices.logout();
      if (success) {
        dispatch(doLogout());
      }
    } catch (error) {
      console.log(`erro ao deslogar: ${error}`);
      message.error('Login inválido, tente novamente');
    } finally {
      dispatch(setLoading(false));
    }
  }
}

function updateLogin(user: UserSessionType) {
  return async function (dispatch: DispatchType) {
    dispatch(setLogin(user));
  }
}

export const sessionActions = {
  login,
  logout,
  updateLogin,
}

export default sessionSlice.reducer
