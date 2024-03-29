import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type CountState = {
  count: number;
  storage: string | null;
};

type CountActions = {
  openAlert: (message?: string) => void;
  increaseCount: () => void;
  resetCount: () => void;
  getStorage: () => void;
};

const countStorageKey = 'count-store';

const initialCount = {
  count: 0,
  storage: null,
};

const useCountStoreBase = create<CountState & CountActions>()(
  devtools(
    persist(
      immer(set => ({
        ...initialCount,
        openAlert: (message = '테스트 입니다.') => {
          alert(message);
        },
        increaseCount: () =>
          set(state => {
            state.count += 1;
          }),
        resetCount: () => set(initialCount),
        getStorage: () =>
          set(state => {
            state.storage = localStorage.getItem(countStorageKey);
          }),
      })),
      {
        name: countStorageKey,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useCountStoreBase;
