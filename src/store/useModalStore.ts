import { create } from 'zustand'

type ModalState = {
  modalState: boolean
  okFunc: () => void
  modalText: string
  setModalState: (state: boolean) => void
  setModalText: (text: string) => void
  setOkFunc: (func: never) => void
}

const useModalStore = create<ModalState>((set) => ({
  modalState: false,
  okFunc: () => {},
  modalText: '',
  setModalState: (state: boolean) => set(() => ({ modalState: state })),
  setModalText: (text: string) => set(() => ({ modalText: text })),
  setOkFunc: (func: never) => set(() => ({ okFunc: func })),
}))

export { useModalStore }
