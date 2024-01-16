import { BiSolidMoon } from "react-icons/bi";
import { RiSunFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getMyProfileDataOptions } from "@/libs/react-query/options/getMyProfileData.ts";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import Avatar from "@/components/common/Avatar";
import { FlexBox } from "@/components/common/Flexbox";
import { Text } from "@/components/common/Text";
import useToast from "@/hooks/useToast.tsx";
import { palette } from "@/styles/palette";
import useAuthStore from "@/store/AuthStore.tsx";

const StyleAppHeader = styled.div<{ height?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${({ height }) => height};
  text-align: center;
  padding: 15% 5% 7%;
`;

const StyledAppHeaderLargeText = styled(Text)<Pick<AppHeaderProps, "isDarkMode">>`
  font: Body_24;
  font-weight: 600;
  letter-spacing: -0.5;
  color: ${({ isDarkMode }) => (isDarkMode ? palette.WHITE : palette.DARK_WHITE)};
  margin-right: 5px;

  @media (max-width: 280px) {
    font-size: 1.25rem;
  }
`;

const StyledAppHeaderSmallText = styled(Text)<Pick<AppHeaderProps, "isDarkMode">>`
  font: Body_18;
  font-weight: 600;
  letter-spacing: -0.5;
  color: ${({ isDarkMode }) => (isDarkMode ? palette.WHITE : palette.DARK_WHITE)};

  @media (max-width: 280px) {
    font-size: 0.85rem;
  }
`;

type AppHeaderProps = {
  isAuth: boolean;
  isDarkMode: boolean;
  height?: string;
  toggleDarkMode: () => void;
};

/**
 * @param isAuth - 인증 여부
 * @param isDarkMode - 다크모드 여부
 * @param height - 컴포넌트 높이
 * @param toggleDarkMode - 다크모드 토글 함수
 */

const AppHeader = ({ isAuth, isDarkMode, height, toggleDarkMode }: AppHeaderProps) => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const moveFromAppHeader = (path: string) => {
    navigate(`/${path}`);
  };

  const { data, isError, isPending, error } = useQuery({
    ...getMyProfileDataOptions,
    staleTime: Infinity,
    enabled: isAuth,
  });

  if (isPending) {
    return <div>{"로딩중..."}</div>; // TODO: 로딩 컴포넌트로 대체
  }

  if (isError) {
    console.log(error);
    showToast({
      message: "프로필 정보를 불러오는데 실패했습니다.",
      type: "error",
      isDarkMode,
    });
    useAuthStore.persist.clearStorage();
    navigate("/login");
  }

  return (
    <StyleAppHeader height={height}>
      <FlexBox
        justify={"space-between"}
        style={{
          marginBottom: "26px",
        }}
      >
        <Avatar
          width={49}
          height={49}
          imgUrl={data?.profileImageUrl || "default_image_url"}
          margin={"0"}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            moveFromAppHeader("profile");
          }}
        />
        {isDarkMode ? (
          <RiSunFill
            size={"20px"}
            style={{
              color: palette.WHITE,
              cursor: "pointer",
            }}
            onClick={toggleDarkMode}
          />
        ) : (
          <BiSolidMoon
            size={"20px"}
            style={{
              color: palette.DARK_WHITE,
              cursor: "pointer",
            }}
            onClick={toggleDarkMode}
          />
        )}
      </FlexBox>
      <FlexBox align={"flex-end"}>
        <StyledAppHeaderLargeText
          isDarkMode={isDarkMode}
          font={"Body_20"}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
            marginRight: 5,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            wordBreak: "break-all",
            maxWidth: "27%",
          }}
        >
          {data?.nickname}
        </StyledAppHeaderLargeText>
        <StyledAppHeaderSmallText
          isDarkMode={isDarkMode}
          font={"Body_16"}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
          }}
        >
          {"님, 안녕하세요! 오늘도 즐거운 커피밋! ☕️"}
        </StyledAppHeaderSmallText>
      </FlexBox>
    </StyleAppHeader>
  );
};

export default AppHeader;
