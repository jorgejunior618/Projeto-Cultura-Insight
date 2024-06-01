import { SupplierEditingType, SupplierStateType, SupplierType } from "@/redux/reduxTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import initialState, { fillSupplier } from "./initialState";

const reducers = {
  changeSupplier: (state: SupplierStateType, {payload}: PayloadAction<SupplierEditingType | undefined>) => {
    if (payload) state.supplier = fillSupplier(payload, state.supplier);
    else state.supplier = initialState.supplier 
  },
  startLoading: (state: SupplierStateType) => {
    state.loading = true;
  },
  stopLoading: (state: SupplierStateType) => {
    state.loading = false;
  },
}

export default reducers;
