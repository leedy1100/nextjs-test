import { create, StoreApi, UseBoundStore } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

type CountState = {
  count: number;
};

type CountAction = {
  actions: {
    increaseCount: () => void;
    resetCount: () => void;
  };
};

const initialCount = {
  count: 0,
};

const countStore = create<CountState & CountAction>()(
  devtools(
    immer((set) => ({
      ...initialCount,
      actions: {
        increaseCount: () =>
          set((state: { count: number }) => {
            state.count += 1;
          }),
        resetCount: () => set(initialCount),
      },
    }))
  )
);

type BoundState = {
  count: number;
  text: string;
};

// no action example
export const useBoundStore = create<BoundState>(() => ({
  count: 0,
  text: "no action",
}));

export const inc = () =>
  useBoundStore.setState((state: { count: number }) => ({
    count: state.count + 1,
  }));

export const setText = (text: string) => useBoundStore.setState({ text });

type sidebarState = {
  sidebar: boolean;
};

type sidebarAction = {
  actions: {
    toggleSidebar: () => void;
    resetSidebar: () => void;
  };
};

const initialSide = {
  sidebar: true,
};

const sideBarStore = create<sidebarState & sidebarAction>()(
  devtools(
    immer((set) => ({
      ...initialSide,
      actions: {
        toggleSidebar: () =>
          set((state: { sidebar: boolean }) => {
            state.sidebar = !state.sidebar;
          }),
        resetSidebar: () => set(initialSide),
      },
    }))
  )
);

export const useCountStore = createSelectors(countStore);
export const useSideBarStore = createSelectors(sideBarStore);
