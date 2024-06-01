import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './home/homeSlice';
import supplierReducer from './supplier/supplierSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      homeState: homeReducer,
      supplierState: supplierReducer,
    }
  });
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']