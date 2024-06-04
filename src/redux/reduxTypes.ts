export type StoreAction = {
  type: string,
  payload?: any,
}
export type StoreState = {
  homeState: HomeStateType,
  supplierState: SupplierStateType,
}
// eslint-disable-next-line no-unused-vars
export type DispatchType = (args: StoreAction) => StoreAction;

export type SupplierType = {
  name: string;
  alternativeName: string;
  cnpj: string;
  address: {
    line_one: string;
    line_two: string | null;
    state: string;
    country: string;
  };
};
export type SupplierEditingType = {
  name?: string;
  alternativeName?: string;
  cnpj?: string;
  address?: {
    line_one?: string;
    line_two?: string | null;
    state?: string;
    country?: string;
  };
};
export type HomeStateType = {
  loading: boolean;
  suppliers: SupplierType [];
};

export type SupplierStateType = {
  loading: boolean;
  editing: boolean;
  completed: boolean;
  supplier: SupplierType;
};
