import { create } from 'zustand'

type InterestList = {
  interestList: string[]
  setInterestList: (list: string[]) => void
}

const useInterestStore = create<InterestList>((set) => ({
  interestList: [],
  setInterestList: (list) => set({ interestList: list }),
}))

export default useInterestStore
