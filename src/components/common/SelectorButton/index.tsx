import styled from '@emotion/styled'
import { useState } from 'react'

import { palette } from '@/styles/palette'

type SelectorButtonProps = {
  buttonName: string
  selectedButtonColor: string
  defaultButtonColor: string
  textColor: string
  onClick?: (selected: boolean) => void
  selected?: boolean
}

type StyledButtonProps = {
  backgroundColor: string
  textColor: string
}

const SelectorButton = ({
  buttonName,
  selectedButtonColor,
  defaultButtonColor = palette.TERTIARY,
  textColor = palette.SECONDARY,
  onClick,
  selected = false,
}: SelectorButtonProps) => {
  const initialBackgroundColor = selected ? selectedButtonColor : defaultButtonColor
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor)
  const [currentTextColor, setCurrentTextColor] = useState(textColor)

  const handleButtonClick = () => {
    const isSelected = backgroundColor !== selectedButtonColor
    setBackgroundColor(isSelected ? selectedButtonColor : defaultButtonColor)
    if (textColor !== palette.WHITE) {
      setCurrentTextColor(isSelected ? palette.WHITE : textColor)
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

const StyledButton = styled.button<StyledButtonProps>`
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
