import { createSlice } from '@reduxjs/toolkit';

import reducers from './reducers';
import { DispatchType } from '../reduxTypes';
import { message } from 'antd';
import initialState from './initialState';

import mockData from '@/mock.json';
import supplierServices from '@/services/supplier.services';

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers,
})

const { startLoading, stopLoading, fillSuppliers, deleteSupplier } = homeSlice.actions;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function searchSuppliers() {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      const suppliers = supplierServices.getSuppliers();

      await sleep(1500);

      dispatch(fillSuppliers(suppliers));
    } catch (error) {
      console.log(`erro ao listar fornecedores: ${error}`);
      dispatch(fillSuppliers([]));
      message.error('Ocorreu um erro, tente novamente');
    } finally {
      dispatch(stopLoading());
    }
  }
}

function removeSupplier(supplierID: string) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());

    try {
      supplierServices.deleteSupplier(supplierID);
      dispatch(deleteSupplier(supplierID));
      message.info(`Fornecedor [CNPJ: ${supplierID}] removido com sucesso`);
    } catch (error) {
      console.log(`erro ao remover Fornecedor: ${error}`);
      dispatch(fillSuppliers([]));
    } finally {
      dispatch(stopLoading());
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
  searchSuppliers,
  removeSupplier,
  startLoad,
  stopLoad,
}

export default homeSlice.reducer
