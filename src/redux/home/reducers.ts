import { HomeStateType, SupplierType } from "@/redux/reduxTypes";
import { PayloadAction } from "@reduxjs/toolkit";

const reducers = {
  fillSuppliers: (state: HomeStateType, {payload}: PayloadAction<SupplierType []>) => {
    state.suppliers = payload ?? [];
  },
  deleteSupplier: (state: HomeStateType, {payload}: PayloadAction<string>) => {
    const filteredSuppliers = state.suppliers.filter(sup => sup.cnpj !== payload);

    state.suppliers = filteredSuppliers
  },
  startLoading: (state: HomeStateType) => {
    state.loading = true;
  },
  stopLoading: (state: HomeStateType) => {
    state.loading = false;
  },
}

export default reducers;
