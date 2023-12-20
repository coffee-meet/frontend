import { type ComponentProps, type ReactNode } from "react";
import styled from "@emotion/styled";
import Avatar from "@/components/common/Avatar";
import { ChattingText } from "@/components/common/ChattingText";
import { type KeyOfPalette, type KeyOfTypo } from "@/styles/theme";
import useBottomSheetStore from "@/store/BottomSheetStore";
import defaultProfileImage from "@/assets/images/defaultProfileImage.png";

interface ListRowProps extends ComponentProps<"div"> {
  rightElement: ReactNode;
  userId: string;
  profileImageUrl: string;
  leftImage?: string | undefined;
  mainText: ReactNode;
  textTypo?: KeyOfTypo;
  textColor?: KeyOfPalette;
  imageGap?: number;
  gap?: number;
  subElement?: ReactNode;
  fullWidth?: boolean;
}

/**
 * @param rightElement : 오른쪽에 위치시킬 React Element
 * @param leftImage : 왼쪽에 위치시킬 Image 컴포넌트
 * @param mainText: 왼쪽에 위치시킬 main Text
 * @param textTypo : main Text에 적용할 typo
 * @param textColor: main Text에 적용시킬 color
 * @param imageGap : image와 Text 사이의 gap
 * @param gap : text와 subText 사이의 gap 결정
 * @param subElement: main Text 아래에 위치할 React Element
 * @param fullWidth : true로 설정할 경우 width: 100%, 기본값 true
 */

const ChatBubbleListLow = ({
  rightElement,
  userId,
  profileImageUrl,
  leftImage = defaultProfileImage,
  mainText,
  textTypo = "Body_12",
  textColor = "GRAY500",
  gap = 4,
  imageGap = 5,
  subElement,
  fullWidth = true,
  ...props
}: ListRowProps) => {
  const { setBottomSheetState, setUserId } = useBottomSheetStore();
  const handleBottomSheet = () => {
    setBottomSheetState(true);
    setUserId(userId);
  };
  return (
    <>
      <MainFlexBox
        fullWidth={fullWidth}
        {...props}
      >
        <SubFlexBox gap={imageGap}>
          <StyleAvatarWrapper onClick={handleBottomSheet}>
            {leftImage ? (
              <Avatar
                width={35}
                height={35}
                imgUrl={leftImage}
                margin={"0"}
              />
            ) : (
              ""
            )}
          </StyleAvatarWrapper>
          <TextFlexBox gap={gap}>
            <StyledText
              text={mainText}
              typo={textTypo}
              color={textColor}
            />
            {subElement && subElement}
          </TextFlexBox>
        </SubFlexBox>
        {rightElement}
      </MainFlexBox>
    </>
  );
};

const MainFlexBox = styled.div<{ fullWidth: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : undefined)};
`;

const SubFlexBox = styled.div<{ gap: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap }) => `${gap}px`};
`;
const StyleAvatarWrapper = styled.span``;
const TextFlexBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap }) => `${gap}px`};
  align-items: flex-start;
  width: 330px;
`;

const StyledText = ({
  text,
  typo,
  color,
  ...props
}: {
  text: ReactNode;
  typo: KeyOfTypo;
  color: KeyOfPalette;
} & ComponentProps<"div">) => {
  return (
    <>
      {typeof text === "string" ? (
        <ChattingText
          typo={typo}
          color={color}
          {...props}
        >
          {text}
        </ChattingText>
      ) : (
        <div {...props}>{text}</div>
      )}
    </>
  );
};
export default ChatBubbleListLow;
