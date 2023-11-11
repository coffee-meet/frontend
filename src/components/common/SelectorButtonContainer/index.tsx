import styled from '@emotion/styled'
import { useState } from 'react'

import AlertText from '@/components/common/AlertText'
import CountNumber from '@/components/common/CountNumber'
import CustomSelectorButton from '@/components/common/CustomSelectorButton'
import SelectorButton from '@/components/common/SelectorButton'
import { palette } from '@/styles/palette'
type SelectorButtonContainerProps = {
  isDarkMode: boolean
  buttonNames: string[]
  maxLength: number
}

const SelectorButtonContainer = ({
  isDarkMode,
  buttonNames,
  maxLength,
}: SelectorButtonContainerProps) => {
  const [selectedCount, setSelectedCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [customButtons, setCustomButtons] = useState<string[]>([])
  const selectedList = []
  const handleButtonSelection = (isSelected: boolean) => {
    if (isSelected) {
      if (selectedCount + 1 > maxLength) {
        setShowAlert(true)
        return
      } else {
        setSelectedCount(selectedCount + 1)
      }
    } else {
      setSelectedCount(Math.max(selectedCount - 1, 0))
    }

    setShowAlert(false)
  }
  const handleCustomButtonClick = (isSelected: boolean) => {
    handleButtonSelection(isSelected)
  }

  const handleCustomButtonRemove = (buttonName: string) => {
    const updatedCustomButtons = customButtons.filter((name) => name !== buttonName)
    setCustomButtons(updatedCustomButtons)
    setSelectedCount(Math.max(selectedCount - 1, 0))
  }

  return (
    <ButtonsContainerOuterWrapper>
      <ButtonsContainer isDarkMode={isDarkMode}>
        {buttonNames.map((name, index) => (
          <SelectorButton
            key={index}
            isDarkMode={isDarkMode}
            buttonName={name}
            isButtonClicked={handleButtonSelection}
            isMaxLengthReached={selectedCount >= maxLength}
            isButtonSelected={false}
          />
        ))}
        {customButtons.map((name, index) => (
          <CustomSelectorButton
            key={index}
            isDarkMode={isDarkMode}
            buttonName={name}
            isButtonClicked={(isSelected) => handleCustomButtonClick(isSelected)}
            onRemove={() => handleCustomButtonRemove(name)}
            isMaxLengthReached={selectedCount >= maxLength}
            isButtonSelected={false}
          />
        ))}
        {showAlert && (
          <AlertText
            padding={'10px 0 0 0'}
            textAlign={'end'}
            fontSize={'12px'}
            fontColor={palette.RED}
          >
            {`최대 ${maxLength}개까지만 설정할 수 있습니다!`}
          </AlertText>
        )}
      </ButtonsContainer>
      <CountNumber
        currentLength={selectedCount}
        maxLength={maxLength}
        top={5}
        right={-320}
        color={isDarkMode ? palette.GRAY300 : palette.BLACK}
      />
    </ButtonsContainerOuterWrapper>
  )
}

const ButtonsContainerOuterWrapper = styled.div`
  position: relative;
`

const ButtonsContainer = styled.div<{ isDarkMode: boolean }>`
  width: 348px;
  min-height: 235px;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid gray;
  position: relative;
  background-color: ${(props) => (props.isDarkMode ? palette.GRAY600 : palette.WHITE)};
  border-radius: 10px;
  border-color: ${(props) => (props.isDarkMode ? 'none' : palette.GRAY200)};
  border-width: ${(props) => (props.isDarkMode ? 'none' : '1px')};
`

export default SelectorButtonContainer
