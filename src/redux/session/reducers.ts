import { SessionStateType, UserSessionType } from "@/redux/reduxTypes";
import { PayloadAction } from "@reduxjs/toolkit";

const reducers = {
  setLogin: (state: SessionStateType, {payload}: PayloadAction<UserSessionType>) => {
    state.logged = true;
    state.user = payload;
  },
  doLogout: (state: SessionStateType) => {
    state.logged = false;
    state.user = null;
  },
  setLoading: (state: SessionStateType, {payload}: PayloadAction<boolean>) => {
    state.loading = payload;
  },
}

export default reducers;
