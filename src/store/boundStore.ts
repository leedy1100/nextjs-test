import { subscribe } from '@/constants/menu';
import { create, StoreApi, UseBoundStore } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type BoundState = {
  cnt: number;
  text: string;
};

// no action example
export const useBoundStore = create<BoundState>(() => ({
  cnt: 0,
  text: 'no action',
}));

export const inc = () =>
  useBoundStore.setState((state: { cnt: number }) => ({
    cnt: state.cnt + 1,
  }));

export const setText = (text: string) => useBoundStore.setState({ text });
