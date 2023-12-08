import { create } from "zustand";

type CountState = {
  count: number;
};

type CountAction = {
  increaseCount: (count: CountState["count"]) => void;
  resetCount: () => void;
};

export const CountStore = create<CountState & CountAction>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));
