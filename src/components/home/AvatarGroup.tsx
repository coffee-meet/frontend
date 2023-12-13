import styled from "@emotion/styled";
import Avatar from "@/components/common/Avatar";

const StyledAvatarGroup = styled.div<{ avatarHeight: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ avatarHeight }) => `${avatarHeight}px`};
`;

const StyledAvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

type AvatarGroupProps = {
  avatarList: string[];
  avatarWidth?: number;
  avatarHeight?: number;
  style?: React.CSSProperties;
};

/**
 * @param avatarList: string[] - 아바타 이미지 리스트
 * @param avatarWidth?: number - 아바타 이미지의 width 값
 * @param avatarHeight?: number - 아바타 이미지의 height 값
 * @param style?: React.CSSProperties - 컴포넌트 스타일
 */

const AvatarGroup = ({
  avatarList,
  avatarWidth = 34,
  avatarHeight = 34,
  ...props
}: AvatarGroupProps) => {
  return (
    <StyledAvatarGroup
      avatarHeight={avatarHeight}
      {...props}
    >
      {avatarList.map((avatar, index) => {
        return (
          <StyledAvatarWrapper
            key={index}
            style={{
              right: `${index * 7}px`,
            }}
          >
            <Avatar
              width={avatarWidth}
              height={avatarHeight}
              imgUrl={avatar}
              margin={"0"}
              border={"2px solid red"}
            />
          </StyledAvatarWrapper>
        );
      })}
    </StyledAvatarGroup>
  );
};

export default AvatarGroup;
