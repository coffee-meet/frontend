import styled from '@emotion/styled'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

import NormalButton from '@/components/common/Buttons/NormalButton/NormalButton'
import { useModalStore } from '@/store/useModalStore'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'
//Modal컴포넌트 사용할 때 props로 받아야 할 것들
//modalText,

const Modal = () => {
  const { modalState, setModalState, okFunc, setOkFunc } = useModalStore()
  const OkAndClose = () => {
    okFunc()
    closeModal()
  }
  const closeModal = () => {
    setModalState(false)
  }
  return (
    <>
      {modalState ? (
        <StyleModalWrapper>
          <StyleModal>
            <HiOutlineExclamationCircle
              size={50}
              style={{ margin: 20 }}
            ></HiOutlineExclamationCircle>
            <StyleModalText>{'인증을 수락하시겠습니까?'}</StyleModalText>
            <StyleButtonWrapper>
              <NormalButton
                normalButtonType={'modal-accept'}
                style={{ margin: 10 }}
                onClick={OkAndClose}
              >
                {'확인'}
              </NormalButton>
              <NormalButton
                normalButtonType={'modal-deny'}
                style={{ margin: 10 }}
                onClick={closeModal}
              >
                {'취소'}
              </NormalButton>
            </StyleButtonWrapper>
          </StyleModal>
        </StyleModalWrapper>
      ) : (
        ''
      )}
    </>
  )
}

const StyleModalWrapper = styled.div`
  z-index: 999;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const StyleModal = styled.div`
  width: 344px;
  height: 246px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 3px ${palette.GRAY400};
  text-align: center;
`

const StyleButtonWrapper = styled.span`
  justify-content: center;
  margin: 30px;
  display: flex;
`
const StyleModalText = styled.div`
  color: ${palette.BLACK};
  text-align: center;
  font-size: ${typo.Body_20()};
  margin: 20px;
`
export default Modal
