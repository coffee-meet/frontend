import styled from '@emotion/styled'
import { useState } from 'react'

import { palette } from '@/styles/palette'

type SelectorButtonProps = {
  isDarkMode: boolean
  buttonName: string
  onClick?: (selected: boolean) => void
  isButtonselected?: boolean
  maxLengthReached: boolean
}

const SelectorButton = ({
  isDarkMode,
  buttonName,
  onClick,
  isButtonselected: propIsButtonSelected = false,
  maxLengthReached = false,
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
  const [isButtonselected, setIsButtonselected] = useState(propIsButtonSelected)
  const initialBackgroundColor = isButtonselected
    ? defaultSettings.selectedButtonColor
    : defaultSettings.defaultButtonColor
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor)
  const [currentTextColor, setCurrentTextColor] = useState(defaultSettings.textColor)

  const handleButtonClick = () => {
    const isSelected = backgroundColor !== defaultSettings.selectedButtonColor

    if (maxLengthReached && !isButtonselected) {
      onClick && onClick(true)
      return
    }
    setIsButtonselected(!isButtonselected)

    setBackgroundColor(
      isSelected ? defaultSettings.selectedButtonColor : defaultSettings.defaultButtonColor,
    )
    if (defaultSettings.textColor !== palette.WHITE) {
      setCurrentTextColor(isSelected ? palette.WHITE : defaultSettings.textColor)
    }
    if (onClick) onClick(isSelected)
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
