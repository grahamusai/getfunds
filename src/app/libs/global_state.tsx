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
  useSlider: boolean;
  setUseSlider: (value: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  termsModalIsOpen: boolean;
  setTermsModalIsOpen: (value: boolean) => void;
  submitModalIsOpen: boolean;
  setSubmitModalIsOpen: (value: boolean) => void;
  modalErrorMessage: string;
  setModalErrorMessage: (value: string) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  turnOver: 0,
  setTurnOver: (value: number) => set({ turnOver: value }),
  grossProfit: 0,
  setGrossProfit: (value: number) => set({ grossProfit: value }),
  neededAmount: 0,
  setNeededAmount: (value: number) => set({ neededAmount: value }),
  duration: 3,
  setDuration: (value: number) => set({ duration: value }),
  frequency: "daily",
  setFrequency: (value: string) => set({ frequency: value }),
  useSlider: true,
  setUseSlider: (value: boolean) => set({ useSlider: value }),
  isModalOpen: false,
  setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
  termsModalIsOpen: false,
  setTermsModalIsOpen: (value: boolean) => set({ termsModalIsOpen: value }),
  submitModalIsOpen: false,
  setSubmitModalIsOpen: (value: boolean) => set({ termsModalIsOpen: value }),
  modalErrorMessage: "",
  setModalErrorMessage: (value: string) => set({ modalErrorMessage: value }),
}));
