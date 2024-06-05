import { createSlice } from '@reduxjs/toolkit';

import { message } from 'antd';
import reducers from './reducers';
import { DispatchType, SupplierEditingType, SupplierType } from '../reduxTypes';
import initialState from './initialState';
import supplierServices from '@/services/supplier.services';

const supplierSlice = createSlice({
  name: 'supplierSlice',
  initialState,
  reducers,
})

const {
  startLoading,
  stopLoading,
  changeSupplier,
  initEditing,
  clearSupplierState,
  completeEditing,
} = supplierSlice.actions;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function searchSupplier(supplierID: string) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      const supplier = await supplierServices.getSupplier(supplierID);

      if (supplier) dispatch(initEditing(supplier));
    } catch (error) {
      console.log(`erro ao buscar fornecedor: ${error}`);
      dispatch(clearSupplierState());
      message.error('Ocorreu um erro, tente novamente');
    } finally {
      dispatch(stopLoading());
    }
  }
}

function initEditingSupplier(supplier: SupplierType) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      dispatch(initEditing(supplier));
    } catch (error) {
      console.log(`erro ao buscar fornecedor: ${error}`);
      dispatch(clearSupplierState());
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
      await supplierServices.createSupplier(supplier);

      await sleep(1500);
      dispatch(completeEditing());
      message.success('Fornecedor adicionado com sucesso');
    } catch (error) {
      console.log(`erro ao cadastrar fornecedor: ${error}`);
      if (Object.getOwnPropertyNames(error).includes('message')) {
        message.error(`${(error as any).message}`);
      } else {
        message.error('Não foi possível cadastrar o Fornecedor, tente novamente');
      }
    } finally {
      dispatch(stopLoading());
    }
  }
}

function updateSupplier(supplier: SupplierType) {
  return async function (dispatch: DispatchType) {
    dispatch(startLoading());
    try {
      await supplierServices.updateSupplier(supplier);

      await sleep(1500);
      dispatch(completeEditing());
      message.success('Fornecedor atualizado com sucesso');
    } catch (error) {
      console.log(`erro ao atualizar fornecedor: ${error}`);
      if (Object.getOwnPropertyNames(error).includes('message')) {
        message.error(error as string);
      } else {
        message.error('Não foi possível atualizar o Fornecedor, tente novamente');
      }
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
      dispatch(clearSupplierState());
      message.error('Ocorreu um erro, tente novamente');
    }
  }
}

function clanForm() {
  return (dispatch: DispatchType) => dispatch(clearSupplierState());
}
function startLoad() {
  return (dispatch: DispatchType) => dispatch(startLoading());
}
function stopLoad() {
  return (dispatch: DispatchType) => dispatch(stopLoading());
}

export const supplierActions = {
  clanForm,
  startLoad,
  stopLoad,
  initEditingSupplier,
  modifySupplier,
  searchSupplier,
  createSupplier,
  updateSupplier,
}

export default supplierSlice.reducer
