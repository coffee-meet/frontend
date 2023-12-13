import { useState } from "react";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette";

type ToggleButtonProps = {
  buttonName: string;
  selectedButtonColor: string;
  defaultButtonColor?: string;
  selectedTextColor: string;
  onClick?: () => void;
};

type StyledButtonProps = {
  backgroundColor: string;
  textColor: string;
};

const DarkSelectorButton = ({
  buttonName,
  selectedButtonColor,
  defaultButtonColor = palette.WHITE,
  selectedTextColor = palette.SECONDARY,
  onClick,
}: ToggleButtonProps) => {
  const [backgroundColor, setBackgroundColor] = useState(defaultButtonColor);
  const [textColor, setTextColor] = useState(palette.SECONDARY); // 텍스트 색상에 대한 state

  const handleButtonClick = () => {
    setBackgroundColor((prevColor) => {
      if (prevColor === defaultButtonColor) {
        setTextColor(selectedTextColor);
        return selectedButtonColor;
      } else {
        setTextColor(palette.SECONDARY);
        return defaultButtonColor;
      }
    });
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={handleButtonClick}
    >
      {buttonName}
    </StyledButton>
  );
};

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
  color: ${(props) => props.textColor};
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -1px;
`;

export default DarkSelectorButton;
