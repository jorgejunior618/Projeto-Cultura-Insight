import { configureStore } from '@reduxjs/toolkit'
// import loginReducer from './login/loginSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      // homeState: {},
    }
  });
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']