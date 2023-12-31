import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Provider } from "@/pages/login/Login";

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type AuthState = {
  provider: Provider;
  authTokens?: Tokens;
  setProvider: (provider: Provider) => void;
  setAuthTokens: (authTokens: Tokens) => void;
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      authTokens: undefined,
      provider: "KAKAO",
      setProvider: (provider: Provider) => set(() => ({ provider })),
      setAuthTokens: (authTokens: Tokens) =>
        set(() => ({
          authTokens,
        })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
