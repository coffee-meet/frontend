import { create } from 'zustand'

type ModalState = {
  modalState: boolean
  type: 'confirm' | 'warn'
  okFunc: () => void
  mainText: string
  subText?: string | undefined
  setType: (type: 'confirm' | 'warn') => void
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
  type: 'confirm',
  setType: (type) => set({ type: type }),
  setSubText: (text) => set({ subText: text }),
  setModalState: (state) => set({ modalState: state }),
  setMainText: (text) => set({ mainText: text }),
  setOkFunc: (func) => set({ okFunc: func }),
}))
export default useModalStore
