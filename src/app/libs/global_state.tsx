import { create } from "zustand";

//create interface

interface GlobalState {
  turnOver: number;
  setTurnOver: (value: number) => void;
  grossProfit: number;
  setGrossProfit: (value: number) => void;
  neededAmount: number;
  setNeededAmount: (value: number) => void;
  duration: number;
  setDuration: (value: number) => void;
  frequency: string;
  setFrequency: (value: string) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  turnOver: 0,
  setTurnOver: (value: number) => set({ turnOver: value }),
  grossProfit: 0,
  setGrossProfit: (value: number) => set({ grossProfit: value }),
  neededAmount: 0,
  setNeededAmount: (value: number) => set({ neededAmount: value }),
  duration: 0,
  setDuration: (value: number) => set({ duration: value }),
  frequency: "weekly",
  setFrequency: (value: string) => set({ frequency: value }),
}));
