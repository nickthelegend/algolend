// import create from "zustand";
import { create } from 'zustand';

export const useWalletStore = create((set) => ({
  accountAddress: null,
  setAccountAddress: (address) => set({ accountAddress: address }),
}));
