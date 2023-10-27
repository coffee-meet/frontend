import styled from '@emotion/styled'
import { useState } from 'react'

import { palette } from '@/styles/palette'

type ToggleButtonProps = {
  buttonName: string
  selectedButtonColor: string
  defaultButtonColor?: string
  onClick?: () => void
}

type StyledButtonProps = {
  backgroundColor: string
}

const WhiteSelectorButton = ({
  buttonName,
  selectedButtonColor,
  defaultButtonColor = palette.TERTIARY,
  onClick,
}: ToggleButtonProps) => {
  const [backgroundColor, setBackgroundColor] = useState(defaultButtonColor)

  const handleButtonClick = () => {
    setBackgroundColor((prevColor) =>
      prevColor === defaultButtonColor ? selectedButtonColor : defaultButtonColor,
    )
    if (onClick) onClick()
  }

  return (
    <StyledButton backgroundColor={backgroundColor} onClick={handleButtonClick}>
      {buttonName}
    </StyledButton>
  )
}

const StyledButton = styled.button<StyledButtonProps>`
  margin: 0 4px;
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
  color: ${palette.WHITE}; // 텍스트의 기본 색상을 검은색으로 설정
  display: inline-block; // 버튼의 크기를 내용물의 크기에 맞게 조절
  vertical-align: middle; // 버튼의 텍스트를 버튼의 중앙에 위치시킴
  line-height: 1; // 텍스트 높이를 폰트 크기에 맞게 조절
`

export default WhiteSelectorButton
