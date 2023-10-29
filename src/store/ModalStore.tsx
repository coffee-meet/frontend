import { create } from 'zustand'

type ModalState = {
  modalState: boolean
  okFunc: () => void
  mainText: string
  subText?: string
  setSubText: (text: string | undefined) => void
  setModalState: (state: boolean) => void
  setMainText: (text: string) => void
  setOkFunc: (func: () => void) => void
}

const useModalStore = create<ModalState>((set) => ({
  modalState: false,
  okFunc: () => {},
  mainText: '',
  subText: '',
  setSubText: (text) => set({ subText: text }),
  setModalState: (state) => set({ modalState: state }),
  setMainText: (text) => set({ mainText: text }),
  setOkFunc: (func) => set({ okFunc: func }),
}))
export default useModalStore
