import { SessionStateType } from "../reduxTypes";

export const initialState: SessionStateType = {
  loading: false,
  logged: false,
  user: null,
};

export default initialState;