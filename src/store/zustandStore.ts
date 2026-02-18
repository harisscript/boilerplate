// src/store/zustandStore.ts
import { create } from 'zustand';

interface AppState {
  user: string | null;
  setUser: (user: string | null) => void;
}

const useAppStore = create<AppState>(set => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useAppStore;
