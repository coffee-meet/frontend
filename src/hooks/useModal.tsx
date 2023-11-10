import Modal from '@/components/common/Modal'
import useModalStore from '@/store/ModalStore'

type ModalConfirmPropsType = {
  type: 'warn' | 'confirm'
  okFunc: () => void
  mainText: string
  subText?: string
  acceptText?: string
  cancelText?: string
}
export const useModal = () => {
  const {
    setModalState,
    setOkFunc,
    setMainText,
    setSubText,
    setType,
    setAcceptText,
    setCancelText,
  } = useModalStore()

  const openModal = ({
    mainText,
    subText,
    okFunc,
    type,
    acceptText,
    cancelText,
  }: ModalConfirmPropsType) => {
    setModalState(true)
    setType(type)
    setMainText(mainText)
    setSubText(subText)
    setOkFunc(okFunc)
    setAcceptText(acceptText)
    setCancelText(cancelText)
  }

  return { openModal, Modal }
}
