import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBuildings, BiChevronRight, BiPencil } from "react-icons/bi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { PiIdentificationCardBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useQueryClient } from "@tanstack/react-query";
import { axiosAPI } from "@/apis/axios";
import type { MyProfileData } from "@/apis/profile/type.ts";
import Avatar from "@/components/common/Avatar";
import BackChevron from "@/components/common/BackChevron";
import { InterestButton } from "@/components/common/Buttons/IconButton";
import { Divider } from "@/components/common/Divider";
import { FlexBox } from "@/components/common/Flexbox";
import GradationBackground from "@/components/common/GradationBackground";
import ProfileListRow from "@/components/common/ListRow/ProfileListRow";
import NavigationBar from "@/components/common/NavigationBar";
import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";
import Spacing from "@/components/common/Spacing";
import { Text, TextWrapper } from "@/components/common/Text";
import { useModal } from "@/hooks/useModal";
import useToast from "@/hooks/useToast";
import { palette } from "@/styles/palette";
import useAuthStore from "@/store/AuthStore.tsx";
import useThemeStore from "@/store/ThemeStore";
import KakaoIcon from "@/assets/icons/KakaoIcon.tsx";
import NaverIcon from "@/assets/icons/NaverIcon";

const ProfileDefault = () => {
  const navigate = useNavigate();
  const isDarkMode = useThemeStore((store) => store.isDarkMode);
  const { openModal } = useModal();
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<MyProfileData>(["myProfileData"]);

  if (!data) {
    showToast({
      message: "필요한 정보를 불러오지 못했습니다! 다시 로그인해주세요!",
      type: "warning",
      isDarkMode,
    });
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    openModal({
      mainText: "로그아웃 하시겠습니까?",
      subText: "로그아웃 시 로그인 화면으로 이동합니다.",
      okFunc: async () => {
        await axiosAPI
          .post("/v1/auth/logout")
          .then(() => {
            localStorage.setItem("jwt", "");
            localStorage.removeItem("userId");
            localStorage.removeItem("nickname");
            localStorage.removeItem("profileImageUrl");
            useAuthStore.persist.clearStorage();
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      type: "warn",
      acceptText: "네, 로그아웃 하겠습니다.",
      cancelText: "아니오. 취소하겠습니다.",
      isDarkMode,
    });
  };

  const handleDeleteAccount = () => {
    openModal({
      mainText: "계정을 삭제하시겠습니까?",
      subText: "계정을 삭제하시면 모든 정보가 삭제되며 복구할 수 없습니다.",
      okFunc: () => {
        navigate("/login");
      },
      type: "warn",
      acceptText: "네, 삭제하겠습니다.",
      cancelText: "아니오. 취소하겠습니다.",
      isDarkMode,
    });
  };

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <StyledProfilePageHeader>
        <PageHeader
          title={"마이 페이지"}
          leftIcon={
            <BackChevron
              hasBackground={false}
              prevClick={() => {
                navigate(-1);
              }}
            />
          }
        />
        <Spacing size={20} />
        <FlexBox>
          <StyledProfilePrimaryInfo isDarkMode={isDarkMode}>
            <Avatar
              width={49}
              height={49}
              imgUrl={data.profileImageUrl}
            />
            <StyledProfilePrimaryInfoTextWrapper>
              <TextWrapper
                isDarkMode={isDarkMode}
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  font={"Body_20"}
                  fontWeight={600}
                  letterSpacing={-1}
                >
                  {data.nickname}
                </Text>
                <Divider
                  width={"2px"}
                  height={"16px"}
                  margin={"0 10px"}
                  isDarkMode={isDarkMode}
                />
                <Text
                  font={"Body_14"}
                  fontWeight={400}
                  letterSpacing={-1}
                >
                  {data.companyName}
                </Text>
              </TextWrapper>
              <TextWrapper
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
                isDarkMode={isDarkMode}
              >
                <Text
                  font={"Body_12"}
                  fontWeight={600}
                  letterSpacing={-1}
                >
                  {data.department}
                </Text>
              </TextWrapper>
            </StyledProfilePrimaryInfoTextWrapper>
            <BiPencil
              onClick={() => {
                navigate("/profile/edit");
              }}
              style={{
                color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
                cursor: "pointer",
              }}
            />
          </StyledProfilePrimaryInfo>
        </FlexBox>
        <Spacing size={17.5} />
        <InterestButton
          nickName={"나"}
          interests={data.interests}
          isDarkMode={isDarkMode}
        />
        <Spacing size={28.5} />
      </StyledProfilePageHeader>

      <PageContainer
        height={"100%"}
        isDarkMode={isDarkMode}
        style={{
          padding: "5% 5%",
        }}
      >
        <Spacing size={25} />
        <Text
          font={"Body_16"}
          fontWeight={600}
          letterSpacing={-1}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
          }}
        >
          {"개인 및 어플리케이션 정보"}
        </Text>
        <Spacing size={20} />
        <StyledProfilePageContentCard
          height={232}
          isDarkMode={isDarkMode}
        >
          <ProfileListRow
            firstIcon={<BiBuildings size={20} />}
            title={"회사 정보 변경"}
            isDarkMode={isDarkMode}
            additionalContent={<BiChevronRight size={20} />}
            moveFromProfileListRow={() => {
              navigate("/profile/company-edit");
            }}
          />
          <Divider
            width={"100%"}
            height={"1px"}
            isDarkMode={isDarkMode}
            margin={"9px 0"}
          />
          <ProfileListRow
            firstIcon={<MdOutlineRecordVoiceOver size={20} />}
            title={"불편사항 접수"}
            isDarkMode={isDarkMode}
            additionalContent={<BiChevronRight size={20} />}
            moveFromProfileListRow={() => {
              showToast({
                message: "아직 준비중인 기능입니다!",
                type: "info",
                isDarkMode,
              });
            }}
          />
          <Divider
            width={"100%"}
            height={"1px"}
            isDarkMode={isDarkMode}
            margin={"9px 0"}
          />
          <ProfileListRow
            firstIcon={<PiIdentificationCardBold size={20} />}
            title={"소셜 로그인 계정"}
            isDarkMode={isDarkMode}
            additionalContent={
              data.oAuthProvider === "NAVER" ? (
                <NaverIcon
                  width={20}
                  height={20}
                  iconWidth={10}
                  iconHeight={10}
                  borderRadius={4}
                />
              ) : (
                <KakaoIcon
                  width={20}
                  height={20}
                  iconWidth={10}
                  iconHeight={10}
                  borderRadius={4}
                />
              )
            }
          />
          <Divider
            width={"100%"}
            height={"1px"}
            isDarkMode={isDarkMode}
            margin={"9px 0"}
          />
          <ProfileListRow
            firstIcon={<AiOutlineInfoCircle size={20} />}
            title={"커피밋"}
            isDarkMode={isDarkMode}
            additionalContent={"v 0.1"}
          />
        </StyledProfilePageContentCard>
        <Spacing size={26.5} />
        <Text
          font={"Body_16"}
          fontWeight={600}
          letterSpacing={-1}
          style={{
            color: palette.RED,
          }}
        >
          {"⚠️ 주의"}
        </Text>
        <Spacing size={10.5} />
        <StyledProfilePageContentCard
          isDarkMode={isDarkMode}
          height={111}
        >
          <StyledProfileWarningText
            font={"Body_14"}
            fontWeight={700}
            letterSpacing={-0.5}
            onClick={handleLogout}
          >
            {"로그아웃"}
          </StyledProfileWarningText>
          <Divider
            width={"100%"}
            height={"1px"}
            isDarkMode={isDarkMode}
          />
          <StyledProfileWarningText
            font={"Body_14"}
            fontWeight={700}
            letterSpacing={-0.5}
            onClick={handleDeleteAccount}
          >
            {"계정 삭제"}
          </StyledProfileWarningText>
        </StyledProfilePageContentCard>
      </PageContainer>
      <NavigationBar isDarkMode={isDarkMode} />
    </GradationBackground>
  );
};

const StyledProfilePageHeader = styled.div`
  margin: 33px 26.5px 0;
`;

const StyledProfilePrimaryInfo = styled.div<{
  isDarkMode: boolean;
}>`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.WHITE)};
`;

const StyledProfilePrimaryInfoTextWrapper = styled.div`
  margin-left: 23px;
  height: 49px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 280px) {
    margin-left: 10px;
  }
`;

const StyledProfilePageContentCard = styled.div<{
  isDarkMode: boolean;
  height: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 0 18px;
  height: ${({ height }) => height}px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
`;

const StyledProfileWarningText = styled(Text)`
  width: 100%;
  color: ${palette.RED};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

export default ProfileDefault;
