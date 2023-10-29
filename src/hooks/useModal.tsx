import Modal from '@/components/common/Modal'
import useModalStore from '@/store/ModalStore'

type ModalConfirmPropsType = {
  okFunc: () => void
  mainText: string
  subText?: string | undefined
}
export const useModal = () => {
  const { setModalState, setOkFunc, setMainText, setSubText } = useModalStore()

  const openModal = ({ mainText, subText, okFunc }: ModalConfirmPropsType) => {
    setModalState(true)
    setMainText(mainText)
    setSubText(subText)
    setOkFunc(okFunc)
  }
  return { openModal, Modal }
}
