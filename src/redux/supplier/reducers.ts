import { SupplierEditingType, SupplierStateType, SupplierType } from "@/redux/reduxTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import initialState, { fillSupplier } from "./initialState";

const reducers = {
  changeSupplier: (state: SupplierStateType, {payload}: PayloadAction<SupplierEditingType>) => {
    state.supplier = fillSupplier(payload, state.supplier);
  },
  initEditing: (state: SupplierStateType, {payload}: PayloadAction<SupplierType>) => {    
    state.supplier = fillSupplier(payload, initialState.supplier);
    state.editing = true;
  },
  clearSupplierState: (state: SupplierStateType) => {    
    state.editing = false;
    state.loading = false;
    state.completed = false;
    state.supplier = initialState.supplier;
  },
  completeEditing: (state: SupplierStateType) => {
    state.completed = true;
  },
  startLoading: (state: SupplierStateType) => {
    state.loading = true;
  },
  stopLoading: (state: SupplierStateType) => {
    state.loading = false;
  },
}

export default reducers;
