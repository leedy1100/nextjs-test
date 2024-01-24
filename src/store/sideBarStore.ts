import { create, StoreApi, UseBoundStore } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

type SidebarState = {
  sidebar: boolean;
};

type SidebarAction = {
  actions: {
    toggleSidebar: () => void;
    resetSidebar: () => void;
  };
};

const initialSide = {
  sidebar: true,
};

const sideBarStore = create<SidebarState & SidebarAction>()(
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
    })),
  ),
);

const useSideBarStore = createSelectors(sideBarStore);

export default useSideBarStore;
