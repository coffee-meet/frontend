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
  acceptText?: string
  cancelText?: string
  isDarkMode?: boolean
  setAcceptText: (text: string | undefined) => void
  setCancelText: (text: string | undefined) => void
  setDarkMode: (isDarkMode: boolean | undefined) => void
}

const useModalStore = create<ModalState>((set) => ({
  modalState: false,
  okFunc: () => {},
  mainText: '',
  subText: '',
  type: 'confirm',
  acceptText: '네',
  cancelText: '아니오',
  setType: (type) => set({ type: type }),
  setSubText: (text) => set({ subText: text }),
  setModalState: (state) => set({ modalState: state }),
  setMainText: (text) => set({ mainText: text }),
  setOkFunc: (func) => set({ okFunc: func }),
  setAcceptText: (text) => set({ acceptText: text }),
  setCancelText: (text) => set({ cancelText: text }),
  setDarkMode: (isDarkMode) => set({ isDarkMode }),
}))

export default useModalStore
