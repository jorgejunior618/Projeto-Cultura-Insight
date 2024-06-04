import { SupplierEditingType, SupplierStateType, SupplierType } from "@/redux/reduxTypes";

export const fillSupplier = (form: SupplierEditingType, supplierState: SupplierType): SupplierType => {
  const address = {
    line_one: "",
    line_two: "",
    country: "",
    state: "",
  };
  if (form.address) {
    address.line_one = form.address.line_one ?? supplierState.address.line_one;
    address.line_two = form.address.line_two ?? supplierState.address.line_two ?? "";
    address.country = form.address.country ?? supplierState.address.country;
    address.state = form.address.state ?? supplierState.address.state;
  }
  return {
    ...supplierState,
    ...form,
    address,
  }
}

const initialState: SupplierStateType = {
  loading: false,
  editing: false,
  completed: false,
  supplier: {
    name: "",
    alternativeName: "",
    cnpj: "",
    address: {
      line_one: "",
      line_two: "",
      country: "",
      state: "",
    },
  }
}

export default initialState;
