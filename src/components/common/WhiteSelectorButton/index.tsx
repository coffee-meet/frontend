import { useState } from "react";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette";

type ToggleButtonProps = {
  buttonName: string;
  selectedButtonColor: string;
  defaultButtonColor?: string;
  onClick?: () => void;
};

type StyledButtonProps = {
  backgroundColor: string;
};

const WhiteSelectorButton = ({
  buttonName,
  selectedButtonColor,
  defaultButtonColor = palette.TERTIARY,
  onClick,
}: ToggleButtonProps) => {
  const [backgroundColor, setBackgroundColor] = useState(defaultButtonColor);

  const handleButtonClick = () => {
    setBackgroundColor((prevColor) =>
      prevColor === defaultButtonColor ? selectedButtonColor : defaultButtonColor,
    );
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      backgroundColor={backgroundColor}
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
  color: ${palette.WHITE};
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 600;
`;

export default WhiteSelectorButton;
