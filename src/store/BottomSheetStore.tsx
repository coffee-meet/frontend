import { create } from "zustand";

type BottomSheetState = {
  bottomSheetState: boolean;
  userId: string;
  setUserId: (id: string) => void;
  setBottomSheetState: (state: boolean) => void;
};
const useBottomSheetStore = create<BottomSheetState>((set) => ({
  bottomSheetState: false,
  userId: "",
  setUserId: (id) => set({ userId: id }),
  setBottomSheetState: (state) => set({ bottomSheetState: state }),
}));

export default useBottomSheetStore;
