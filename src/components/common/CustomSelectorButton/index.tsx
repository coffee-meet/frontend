import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { TiDelete } from 'react-icons/ti'

import { palette } from '@/styles/palette'

type CustomSelectorButtonProps = {
  isDarkMode: boolean
  buttonName: string
  onClick: (selected: boolean) => void
  onRemove: () => void
  isButtonselected: boolean
  maxLengthReached: boolean
}

const CustomSelectorButton = ({
  isDarkMode,
  buttonName,
  onClick,
  onRemove,
  isButtonselected: propIsButtonSelected,
  maxLengthReached,
}: CustomSelectorButtonProps) => {
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

  useEffect(() => {
    setIsButtonSelected(propIsButtonSelected)
  }, [propIsButtonSelected])

  const handleButtonClick = () => {
    if (maxLengthReached && !isButtonSelected) {
      onClick && onClick(true)
      return
    }
    setIsButtonSelected((prevState) => !prevState)
    if (onClick) onClick(!isButtonSelected)
  }

  return (
    <StyledButtonWrapper>
      <StyledButton
        backgroundColor={
          isButtonSelected
            ? defaultSettings.selectedButtonColor
            : defaultSettings.defaultButtonColor
        }
        textColor={isButtonSelected ? palette.WHITE : defaultSettings.textColor}
        onClick={handleButtonClick}
      >
        {buttonName}
      </StyledButton>
      <RemoveButton onClick={onRemove}>
        <TiDelete
          style={{
            position: 'relative',
            right: 26,
            top: -15,
            width: 24,
            height: 24,
            cursor: 'pointer',
            color: isDarkMode ? palette.GRAY300 : palette.BLACK,
          }}
        />
      </RemoveButton>
    </StyledButtonWrapper>
  )
}

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

const RemoveButton = styled.button`
  margin-left: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

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

export default CustomSelectorButton
