import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette.ts";

type MultiSelectorProps = {
  isDarkMode: boolean;
  itemList: string[];
  maxCount: number;
  defaultSelectedList?: string[];
  onValueChange?: (value: string[]) => void;
};

const MultiSelector = ({
  isDarkMode,
  itemList,
  maxCount = 0,
  defaultSelectedList,
  onValueChange,
}: MultiSelectorProps) => {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (defaultSelectedList) {
      setSelectedList(defaultSelectedList);
      setSelectedCount(defaultSelectedList.length);
    }
  }, []);

  useEffect(() => {
    onValueChange?.(selectedList);
  }, [selectedList]);

  const handleClickItem = (name: string) => {
    if (selectedCount >= maxCount && !selectedList.includes(name)) {
      return;
    }
    if (!selectedList.includes(name)) {
      setSelectedCount(selectedCount + 1);
      setSelectedList([...selectedList, name]);
    }

    if (selectedList.includes(name)) {
      setSelectedCount(Math.max(selectedCount - 1, 0));
      setSelectedList(selectedList.filter((v) => v != name));
    }
  };

  return (
    <MultiSelectorContainer>
      <ItemContainer>
        {itemList.map((name, idx) => (
          <StyledItem
            key={idx}
            isDarkMode={isDarkMode}
            isSelected={selectedList.includes(name)}
            onClick={(event) => {
              event.preventDefault();
              handleClickItem(name);
            }}
          >
            {name}
          </StyledItem>
        ))}
      </ItemContainer>
      <ItemCountContainer
        isDarkMode={isDarkMode}
      >{`${selectedCount}/${maxCount}`}</ItemCountContainer>
    </MultiSelectorContainer>
  );
};

const MultiSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 348px;
`;

const ItemContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  min-height: 160px;
  border-radius: 10px;
  background-color: ${palette.WHITE};
`;

const ItemCountContainer = styled.span<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 12px;
  color: ${(props) => (props.isDarkMode ? palette.GRAY300 : palette.BLACK)};
`;

const StyledItem = styled.button<{ isDarkMode: boolean; isSelected: boolean }>`
  margin: 8px;
  width: max-content;
  height: 36px;
  padding: 10px 15px 10px 15px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isDarkMode
      ? props.isSelected
        ? palette.SECONDARY
        : palette.WHITE
      : props.isSelected
      ? palette.BLUE
      : palette.TERTIARY};
  color: ${(props) => (props.isDarkMode ? palette.SECONDARY : palette.WHITE)};
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
`;

export default MultiSelector;
