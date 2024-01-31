import { subscribe } from "@/constants/menu";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialSubscribe = {
  subList: subscribe,
};

type SubscribeState = {
  subList: SubscribeMenuInfo[];
  serviceName: string;
};

type SubscribeAction = {
  selectName: (name: string) => void;
  resetName: () => void;
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
        }),
      resetName: () =>
        set((state) => {
          state.serviceName = "";
        }),
    })),
  ),
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
                const item = { ...sub, subscribe: true, fee: Number(fee) };
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
      },
    ),
  ),
);
