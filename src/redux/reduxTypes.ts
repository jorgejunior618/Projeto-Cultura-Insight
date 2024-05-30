export type StoreAction = {
  type: string,
  payload?: any,
}
export type StoreState = {
  homeState: {},
}
// eslint-disable-next-line no-unused-vars
export type DispatchType = (args: StoreAction) => StoreAction
