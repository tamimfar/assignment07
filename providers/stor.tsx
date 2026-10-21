"use client";

import { create } from "zustand";

type StoreState = {
  state: string;
  setState: (value: string) => void;
};

export const useStore = create<StoreState>((set) => ({
  state: "",
  setState: (value) => set({ state: value }),
}));