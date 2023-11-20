import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Provider } from '@/pages/login/Login'

type Tokens = {
  accessToken: string
  refreshToken: string
}

type AuthState = {
  provider: Provider
  isNewUser: boolean
  authTokens?: Tokens
  setIsNewUser: (isNewUser: boolean) => void
  setProvider: (provider: Provider) => void
  setAuthTokens: (authTokens: Tokens) => void
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isNewUser: false,
      provider: 'KAKAO',
      setIsNewUser: (isNewUser: boolean) => set(() => ({ isNewUser })),
      setProvider: (provider: Provider) => set(() => ({ provider })),
      setAuthTokens: (authTokens: Tokens) =>
        set(() => ({
          authTokens,
        })),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAuthStore
