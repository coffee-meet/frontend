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
  userId: number;
  setProvider: (provider: Provider) => void;
  setAuthTokens: (authTokens: Tokens) => void;
  setUserId: (userId: number) => void;
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      authTokens: undefined,
      provider: "KAKAO",
      userId: 0,
      setProvider: (provider: Provider) => set(() => ({ provider })),
      setAuthTokens: (authTokens: Tokens) =>
        set(() => ({
          authTokens,
        })),
      setUserId: (userId: number) => set(() => ({ userId })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
