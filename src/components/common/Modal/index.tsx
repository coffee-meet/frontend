import styled from '@emotion/styled'

import ExclamationIcon from '@/assets/icons/Exclamation.svg'
import WarningIcon from '@/assets/icons/Warning.svg'
import NormalButton from '@/components/common/Buttons/NormalButton/NormalButton'
import useModalStore from '@/store/ModalStore'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'

const Modal = () => {
  const { modalState, setModalState, okFunc, mainText, subText, type } = useModalStore()
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
          <StyleModal type={type}>
            {type == 'confirm' ? (
              <StyleIcon src={ExclamationIcon} />
            ) : (
              <StyleIcon src={WarningIcon} />
            )}

            <StyleMainText subTrue={subText == undefined ? false : true}>{mainText}</StyleMainText>
            <StyleSubText type={type}>{subText}</StyleSubText>
            {type === 'confirm' ? (
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
            ) : (
              <StyleButtonWrapper>
                <NormalButton
                  normalButtonType={'warning-accept'}
                  style={{ margin: 10 }}
                  onClick={OkAndClose}
                >
                  {'예, 나가겠습니다.'}
                </NormalButton>
                <NormalButton
                  normalButtonType={'warning-deny'}
                  style={{ margin: 10 }}
                  onClick={closeModal}
                >
                  {'아니오, 돌아가겠습니다.'}
                </NormalButton>
              </StyleButtonWrapper>
            )}
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
const StyleModal = styled.div<{ type: string }>`
  width: 344px;
  height: ${({ type }) => (type == 'warn' ? '195.6px' : '246px')};
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
  margin: 10px;
  display: flex;
`
const StyleMainText = styled.div<{ subTrue: boolean }>`
  color: ${palette.BLACK};
  text-align: center;
  font-size: ${typo.Body_20()};
  margin-top: ${({ subTrue }) => (subTrue ? '' : '10px')};
  margin-bottom: ${({ subTrue }) => (subTrue ? '20px' : '30px')};
`
const StyleSubText = styled.span<{ type: string }>`
  color: ${palette.GRAY500};
  text-align: center;
  font-size: ${typo.Body_14()};
  /* margin-top: ${({ type }) => (type == 'warn' ? '30px' : '10px')}; */
`
const StyleIcon = styled.img`
  margin: 22px;
`
export default Modal
