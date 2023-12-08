import { create } from "zustand";

type CountState = {
  count: number;
};

type CountAction = {
  increaseCount: (count: CountState["count"]) => void;
  resetCount: () => void;
};

export const useCountStore = create<CountState & CountAction>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));

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
