import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import styled from "@emotion/styled";
import { axiosAPI } from "@/apis/axios";
import useToast from "@/hooks/useToast.tsx";
import { palette } from "@/styles/palette";
import useAuthStore from "@/store/AuthStore";

interface LoginResponse {
  userId: number;
  isRegistered: boolean;
  accessToken: string;
  refreshToken: string;
  nickname: string;
  profileImageUrl: string;
}

const LoginPending = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  const setToken = useAuthStore((state) => state.setAuthTokens);
  const provider = useAuthStore((state) => state.provider);

  const { showToast } = useToast();
  const routeAuthInfo = async () => {
    await axiosAPI
      .get<LoginResponse>(`/v1/users/login/${provider}?authCode=${authCode}`)
      .then((res) => {
        const { userId, accessToken, refreshToken, isRegistered, nickname, profileImageUrl } =
          res.data;

        if (!isRegistered) {
          navigate("/register/user", { state: { userId: userId } });
        }

        if (isRegistered) {
          localStorage.setItem("jwt", accessToken);
          // TODO: 아래 3개의 정보는 추후 AuthStore에서 관리?
          localStorage.setItem("userId", userId.toString());
          localStorage.setItem("nickname", nickname);
          localStorage.setItem("profileImageUrl", profileImageUrl);
          setToken({
            accessToken: accessToken,
            refreshToken: refreshToken,
          });
          navigate("/", {
            state: { userId: userId, nickname: nickname, profileImageUrl: profileImageUrl },
          });
        }
      })
      .catch((error) => {
        console.error(error);
        showToast({
          message: "로그인에 실패했습니다.",
          type: "error",
          isDarkMode: false,
        });
        navigate("/login");
      });
  };
  useEffect(() => {
    routeAuthInfo();
  }, []);

  return (
    <StyledLoginPending>
      <PulseLoader
        size={10}
        speedMultiplier={0.3}
        cssOverride={{
          display: "flex",
          alignItems: "center",
        }}
      />
    </StyledLoginPending>
  );
};

const StyledLoginPending = styled.div`
  background-color: ${palette.SKY_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default LoginPending;
