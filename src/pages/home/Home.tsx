import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@/pages/home/components/Card.tsx";
import AppHeader from "@/components/common/AppHeader";
import { ParticularTopicButton } from "@/components/common/Buttons/IconButton";
import GradationBackground from "@/components/common/GradationBackground";
import NavigationBar from "@/components/common/NavigationBar";
import PageContainer from "@/components/common/PageContainer";
import { Text } from "@/components/common/Text";
import useToast from "@/hooks/useToast";
import { palette } from "@/styles/palette";
import useAuthStore from "@/store/AuthStore.tsx";
import useThemeStore from "@/store/ThemeStore";

const Home = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const { authTokens } = useAuthStore();
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authTokens) {
      showToast({
        message: "로그인이 필요한 서비스입니다!",
        type: "warning",
      });
      navigate("/login");
    }
  }, []);

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <AppHeader
        isAuth={!!authTokens?.accessToken}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <PageContainer
        height={"80%"}
        isDarkMode={isDarkMode}
        style={{
          padding: "5% 5%",
        }}
      >
        <Text
          font={"Body_16"}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            margin: "33px 0 22px 0",
            color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`,
          }}
        >
          {"진행중인 매칭"}
        </Text>
        <Card isDarkMode={isDarkMode} />
        <Text
          font={"Body_16"}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            margin: "32px 0 13px 0",
            color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`,
          }}
        >
          {"커피밋의 추천기능"}
        </Text>
        <ParticularTopicButton
          isDarkMode={isDarkMode}
          moveToParticularTopic={() => {
            showToast({
              message: "아직 준비중인 기능입니다!",
              type: "info",
            });
          }}
        />
      </PageContainer>
      <NavigationBar isDarkMode={isDarkMode} />
    </GradationBackground>
  );
};

export default Home;
