import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ThemeState = {
  isDarkMode: boolean;
  storage?: Storage;
  toggleDarkMode: () => void;
};

const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useThemeStore;
