import { subscribe } from "@/constants/menu";
import { create, StoreApi, UseBoundStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
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

export const useCountStoreBase = create<CountState & CountActions>()(
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
      }
    )
  )
);

type BoundState = {
  cnt: number;
  text: string;
};

// no action example
export const useBoundStore = create<BoundState>(() => ({
  cnt: 0,
  text: "no action",
}));

export const inc = () =>
  useBoundStore.setState((state: { cnt: number }) => ({
    cnt: state.cnt + 1,
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

export const useSideBarStore = createSelectors(sideBarStore);

const initialSubscribe = {
  subList: subscribe,
};

type SubscribeState = {
  subList: SubscribeMenuInfo[];
  serviceName: string;
  modalOpen: boolean;
};

type SubscribeAction = {
  selectName: (name: string) => void;
  resetName: () => void;
  setModalOpen: (open: boolean) => void;
};

export const subscribeStore = create<SubscribeState & SubscribeAction>()(
  devtools(
    immer((set) => ({
      ...initialSubscribe,
      serviceName: "",
      modalOpen: false,
      selectName: (name) =>
        set((state) => {
          state.serviceName = name;
          state.modalOpen = true;
        }),
      resetName: () =>
        set((state) => {
          state.serviceName = "";
        }),
      setModalOpen: (open) =>
        set((state) => {
          state.modalOpen = !open;
        }),
    }))
  )
);

const mySubStorageKey = "subscribe-storage";
const initialMySub = {
  subList: [],
};

type MySubAction = {
  subscribeAdd: (name: string, fee: string) => void;
  subscribeDelete: (name: string) => void;
};

export const mySubStore = create<SubscribeState & MySubAction>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialMySub,
        serviceName: "",
        modalOpen: false,
        subscribeAdd: (name: string, fee: string) =>
          set((state) => {
            subscribe.forEach((sub) => {
              if (sub.name === name) {
                let item = { ...sub, subscribe: true, fee: Number(fee) };
                state.subList.push(item);
              }
            });
          }),
        subscribeDelete: (name: string) =>
          set((state) => {
            state.subList = state.subList.filter((sub) => sub.name !== name);
          }),
      })),
      {
        name: mySubStorageKey,
      }
    )
  )
);
