import { SupplierEditingType, SupplierStateType, SupplierType } from "@/redux/reduxTypes";

export const fillSupplier = (form: SupplierEditingType, supplierState: SupplierType): SupplierType => {
  const address = {
    line_one: "",
    line_two: "",
    number: "",
    country: "",
    state: "",
  };
  if (form.address || supplierState.address) {
    address.line_one = form.address ?
      form.address.line_one ?? supplierState.address.line_one :
      supplierState.address.line_one;
    address.line_two = form.address ?
      form.address.line_two ?? supplierState.address.line_two ?? "" :
      supplierState.address.line_two ?? "";
    address.number = form.address ?
      form.address.number ?? supplierState.address.number :
      supplierState.address.number;
    address.country = form.address ?
      form.address.country ?? supplierState.address.country :
      supplierState.address.country;
    address.state = form.address ?
      form.address.state ?? supplierState.address.state :
      supplierState.address.state;
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
      number: "",
      country: "",
      state: "",
    },
  }
}

export default initialState;
