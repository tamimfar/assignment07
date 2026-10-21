import { create } from "zustand";


type Store = {
  state: string; 
  setState: (newState: string) => void;
};

export const useStore = create<Store>((set) => ({
  state: "",
  setState: (newState) => set({ state: newState }),
}));