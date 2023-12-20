import styled from "@emotion/styled";

type CountNumberProps = {
  currentLength: number;
  maxLength: number;
  color: string;
  right?: number;
  top?: number;
};

type StyleCountNumberProps = {
  color: string;
  right?: number;
  top?: number;
};

const CountNumber = ({
  top,
  right,
  currentLength,
  maxLength,
  color,
}: CountNumberProps): JSX.Element => {
  return (
    <div>
      <StyleCountNumber
        right={right}
        color={color}
        top={top}
      >{`${currentLength}/${maxLength}`}</StyleCountNumber>
    </div>
  );
};

const StyleCountNumber = styled.span<StyleCountNumberProps>`
  position: relative;
  right: ${(props) => props.right}px;
  top: ${(props) => props.top}px;
  bottom: 3px;
  font-size: 12px;
  color: ${(props) => props.color};
`;

export default CountNumber;
