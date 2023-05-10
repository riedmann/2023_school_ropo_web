import { create } from 'zustand'

export const useAppStore = create((set) => ({
  counter: 17,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  decrease: () => set((state) => ({ counter: state.counter - 1 })),
}))