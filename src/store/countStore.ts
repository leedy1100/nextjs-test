import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountState = {
  count: number;
  storage: string | null;
};

type CountActions = {
  // actions: {
  // };
  openAlert: () => void;
  increaseCount: () => void;
  resetCount: () => void;
  getStorage: () => void;
};

const countStorageKey = "count-store";

const initialCount = {
  count: 0,
  storage: "",
};

const useCountStoreBase = create<CountState & CountActions>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialCount,
        openAlert: () => {
          alert("test");
        },
        increaseCount: () =>
          set((state: { count: number }) => {
            state.count += 1;
          }),
        resetCount: () => set(initialCount),
        getStorage: () =>
          set((state) => {
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
