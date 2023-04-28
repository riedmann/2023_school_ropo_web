import { create } from 'zustand'

export const useAppStore = create((set) => ({
  count: 17,
  increase: () => set((state) => ({ count: state.count + 1 })),
  
}))