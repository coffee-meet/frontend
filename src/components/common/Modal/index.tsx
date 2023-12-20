import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import NormalButton from "@/components/common/Buttons/NormalButton";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import useModalStore from "@/store/ModalStore";
import ExclamationIcon from "@/assets/icons/Exclamation.svg";
import WarningIcon from "@/assets/icons/Warning.svg";

const wrapperVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const Modal = () => {
  const {
    modalState,
    setModalState,
    okFunc,
    mainText,
    subText,
    type,
    acceptText,
    cancelText,
    isDarkMode,
  } = useModalStore();
  const OkAndClose = () => {
    okFunc();
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setModalState(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <AnimatePresence>
      {modalState ? (
        <StyledModalWrapper
          variants={wrapperVariants}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          onClick={handleCloseModal}
        >
          <StyledModal
            variants={modalVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            type={type}
            onClick={handleModalClick}
            isDarkMode={isDarkMode}
          >
            {type == "confirm" ? (
              <StyledIcon src={ExclamationIcon} />
            ) : (
              <StyledIcon src={WarningIcon} />
            )}

            <StyledMainText
              font={"Body_20"}
              fontWeight={900}
              letterSpacing={-2}
              subTrue={subText == undefined ? false : true}
              isDarkMode={isDarkMode}
            >
              {mainText}
            </StyledMainText>
            <StyledSubText
              font={"Body_12"}
              fontWeight={900}
              letterSpacing={-1}
              type={type}
              isDarkMode={isDarkMode}
            >
              {subText}
            </StyledSubText>
            {type === "confirm" ? (
              <StyledButtonWrapper>
                <NormalButton
                  normalButtonType={"modal-accept"}
                  style={{ margin: 10 }}
                  onClick={OkAndClose}
                >
                  {"확인"}
                </NormalButton>
                <NormalButton
                  normalButtonType={"modal-deny"}
                  style={{ margin: 10 }}
                  onClick={handleCloseModal}
                >
                  {"취소"}
                </NormalButton>
              </StyledButtonWrapper>
            ) : (
              <StyledButtonWrapper>
                <StyledWarningAcceptButton
                  normalButtonType={"warning-accept"}
                  style={{ margin: 10 }}
                  onClick={OkAndClose}
                >
                  {acceptText ? acceptText : "예, 나가겠습니다."}
                </StyledWarningAcceptButton>
                <StyledWarningAcceptButton
                  normalButtonType={"warning-deny"}
                  style={{ margin: 10 }}
                  onClick={handleCloseModal}
                >
                  {cancelText ? cancelText : "아니오, 돌아가겠습니다."}
                </StyledWarningAcceptButton>
              </StyledButtonWrapper>
            )}
          </StyledModal>
        </StyledModalWrapper>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

const StyledModalWrapper = styled(motion.div)`
  z-index: 999;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  max-width: 414px;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StyledModal = styled(motion.div)<{ type: string; isDarkMode?: boolean }>`
  max-width: 344px;
  height: ${({ type }) => (type == "warn" ? "195.6px" : "246px")};
  z-index: 1;
  position: absolute;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  border-radius: 10px;
  text-align: center;

  @media (max-width: 280px) {
    max-width: 260px;
  }
`;

const StyledIcon = styled.img`
  margin: 22px;
`;

const StyledButtonWrapper = styled.span`
  justify-content: center;
  margin: 10px;
  display: flex;
`;
const StyledMainText = styled(Text)<{ subTrue: boolean; isDarkMode?: boolean }>`
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.BLACK)};
  text-align: center;
  margin-top: ${({ subTrue }) => (subTrue ? "" : "10px")};
  margin-bottom: ${({ subTrue }) => (subTrue ? "20px" : "30px")};
`;
const StyledSubText = styled(Text)<{ type: string; isDarkMode?: boolean }>`
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.GRAY500)};
  text-align: center;

  @media (max-width: 280px) {
    font-size: 10.5px;
  }
`;

const StyledWarningAcceptButton = styled(NormalButton)`
  @media (max-width: 280px) {
    font-size: 10px;
  }
`;

export default Modal;
