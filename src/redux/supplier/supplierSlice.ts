import { createSlice } from '@reduxjs/toolkit';

import { message } from 'antd';
import reducers from './reducers';
import { DispatchType, SupplierEditingType, SupplierType } from '../reduxTypes';
import initialState from './initialState';
import supplierServices from '@/services/supplier.services';

const homeSlice = createSlice({
  name: 'supplierSlice',
  initialState,
  reducers,
})

const { startLoading, stopLoading, changeSupplier } = homeSlice.actions;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function searchSupplier(supplierID: string) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      const supplier = supplierServices.getSupplier(supplierID);

      await sleep(1500);

      dispatch(changeSupplier(supplier));
    } catch (error) {
      console.log(`erro ao buscar fornecedor: ${error}`);
      dispatch(changeSupplier());
      message.error('Ocorreu um erro, tente novamente');
    } finally {
      dispatch(stopLoading());
    }
  }
}

function createSupplier(supplier: SupplierType) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      supplierServices.createSupplier(supplier);

      await sleep(1500);
    } catch (error) {
      console.log(`erro ao buscar fornecedor: ${error}`);
      message.error('Ocorreu um erro, tente novamente');
    } finally {
      dispatch(stopLoading());
    }
  }
}

function updateSupplier(supplier: SupplierType) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      supplierServices.updateSupplier(supplier);

      await sleep(1500);
    } catch (error) {
      console.log(`erro ao buscar fornecedor: ${error}`);
      message.error('Ocorreu um erro, tente novamente');
    } finally {
      dispatch(stopLoading());
    }
  }
}

function modifySupplier(supplier: SupplierEditingType) {
  return async function (dispatch: DispatchType) {
    try {
      dispatch(changeSupplier(supplier));
    } catch (error) {
      console.log(`erro ao modificar fornecedor: ${error}`);
      dispatch(changeSupplier());
      message.error('Ocorreu um erro, tente novamente');
    }
  }
}

function startLoad() {
  return (dispatch: DispatchType) => dispatch(startLoading());
}
function stopLoad() {
  return (dispatch: DispatchType) => dispatch(stopLoading());
}

export const homeActions = {
  startLoad,
  stopLoad,
  modifySupplier,
  searchSupplier,
  createSupplier,
  updateSupplier,
}

export default homeSlice.reducer
