import Modal from "@/components/common/Modal";
import useModalStore from "@/store/ModalStore";

type ModalConfirmPropsType = {
  type: "warn" | "confirm";
  okFunc: () => void;
  mainText: string;
  subText?: string;
  acceptText?: string;
  cancelText?: string;
  isDarkMode?: boolean;
};
export const useModal = () => {
  const {
    setModalState,
    setOkFunc,
    setMainText,
    setSubText,
    setType,
    setAcceptText,
    setCancelText,
    setDarkMode,
  } = useModalStore();

  const openModal = ({
    mainText,
    subText,
    okFunc,
    type,
    acceptText,
    cancelText,
    isDarkMode,
  }: ModalConfirmPropsType) => {
    setModalState(true);
    setType(type);
    setMainText(mainText);
    setSubText(subText);
    setOkFunc(okFunc);
    setAcceptText(acceptText);
    setCancelText(cancelText);
    setDarkMode(isDarkMode);
  };

  return { openModal, Modal };
};
