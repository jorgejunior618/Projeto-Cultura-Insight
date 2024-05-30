"use client"

import { useRef } from 'react';
import { makeStore, AppStore } from '../redux/store';
import { Provider } from 'react-redux';

type StoreProviderProps = {
  children: React.ReactNode;
}
export default function StoreProvider({children}: StoreProviderProps) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  );
}
