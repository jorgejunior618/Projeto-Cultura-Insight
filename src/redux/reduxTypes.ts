export type StoreAction = {
  type: string,
  payload?: any,
}
export type StoreState = {
  sessionState: AppSessionType,
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
    line_two: string;
    number: string;
    state: string;
    country: string;
  };
};
export type UserSessionType = {
  username: string;
  addSupplier: boolean;
}
export type SupplierEditingType = {
  name?: string;
  alternativeName?: string;
  cnpj?: string;
  address?: {
    line_one?: string;
    line_two?: string | null;
    number?: string;
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

export type AppSessionType = {
  logged: boolean;
  user: UserSessionType | null;
};
export type SessionStateType = {
  loading: boolean;
  logged: boolean;
  user: UserSessionType | null;
};
