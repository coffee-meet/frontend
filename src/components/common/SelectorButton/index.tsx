import styled from '@emotion/styled'
import { useState } from 'react'

import useInterestStore from '@/store/InterestStore'
import useJobStore from '@/store/JobStore.tsx'
import { palette } from '@/styles/palette'

type SelectorButtonProps = {
  isDarkMode: boolean
  buttonName: string
  type: 'interest' | 'job'
  isButtonClicked?: (selected: boolean) => void
  isButtonSelected?: boolean
  isMaxLengthReached: boolean
}

const SelectorButton = ({
  isDarkMode,
  buttonName,
  type,
  isButtonClicked,
  isButtonSelected: propIsButtonSelected = false,
  isMaxLengthReached = false,
}: SelectorButtonProps) => {
  const defaultSettings = isDarkMode
    ? {
        selectedButtonColor: palette.SECONDARY,
        defaultButtonColor: palette.WHITE,
        textColor: palette.SECONDARY,
      }
    : {
        selectedButtonColor: palette.BLUE,
        defaultButtonColor: palette.TERTIARY,
        textColor: palette.WHITE,
      }

  const [isButtonSelected, setIsButtonSelected] = useState(propIsButtonSelected)
  const initialBackgroundColor = isButtonSelected
    ? defaultSettings.selectedButtonColor
    : defaultSettings.defaultButtonColor
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor)
  const [currentTextColor, setCurrentTextColor] = useState(defaultSettings.textColor)
  const { interestList, setInterestList } = useInterestStore()
  const { setJobInfo } = useJobStore()

  const handleButtonClick = () => {
    const isSelected = backgroundColor !== defaultSettings.selectedButtonColor

    if (isMaxLengthReached && !isButtonSelected) {
      isButtonClicked && isButtonClicked(true)
      return
    }
    setIsButtonSelected(isSelected)

    if (type === 'interest') {
      if (isSelected) {
        setInterestList([...interestList, buttonName])
      } else {
        setInterestList(interestList.filter((v) => v != buttonName))
      }
    } else {
      if (isSelected) {
        setJobInfo(buttonName)
      } else {
        setJobInfo('')
      }
    }
    setBackgroundColor(
      isSelected ? defaultSettings.selectedButtonColor : defaultSettings.defaultButtonColor,
    )

    console.log(interestList.filter((v) => v != buttonName))
    if (defaultSettings.textColor !== palette.WHITE) {
      setCurrentTextColor(isSelected ? palette.WHITE : defaultSettings.textColor)
    }
    if (isButtonClicked) isButtonClicked(isSelected)
    if (type === 'interest') {
      if (!isSelected) setInterestList(interestList.filter((v) => v != buttonName))
    } else {
      if (!isSelected) setJobInfo('')
    }
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={currentTextColor}
      onClick={handleButtonClick}
    >
      {buttonName}
    </StyledButton>
  )
}

const StyledButton = styled.button<{
  backgroundColor: string
  textColor: string
}>`
  margin: 8px;
  height: 36px;
  padding: 10px 15px 10px 15px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
  color: ${(props) => props.textColor};
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
`

export default SelectorButton
