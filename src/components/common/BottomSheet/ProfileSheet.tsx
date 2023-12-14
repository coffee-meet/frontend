import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { axiosAPI } from "@/apis/axios";
import Avatar from "@/components/common/Avatar";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import useBottomSheetStore from "@/store/BottomSheetStore";
import { InterestButton } from "../Buttons/IconButton";

type OpponentUserData = {
  nickname: string;
  profileImageUrl: string;
  department: string;
  interests: string[];
};
const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow-y: hidden;
`;

const BottomContentWrapper = styled(motion.div)<{
  isDarkMode: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 378px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
`;

const BottomContentHeader = styled.div<{
  isDarkMode: boolean;
}>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ isDarkMode }) => (isDarkMode ? palette.GRAY500 : palette.GRAY200)};
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px 0;
`;

const BottomContent = styled.div<{
  isDarkMode: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
`;

type ProfileSheetProps = {
  title: string;
  isDarkMode: boolean;
};

const ProfileSheet = ({ title, isDarkMode }: ProfileSheetProps) => {
  const [isOpen, setIsOpen] = useState(true); // ProfileSheet의 상태
  const { setBottomSheetState, userId } = useBottomSheetStore();
  const [opponentUserProfile, setOpponentUserProfile] = useState<OpponentUserData>({
    nickname: "",
    profileImageUrl: "",
    department: "",
    interests: [],
  });
  const handleWrapperClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const toggleProfileSheet = () => {
    setIsOpen(false);
    setBottomSheetState(false);
  };
  const getOpponentUserProfile = async () => {
    try {
      const response = await axiosAPI.get(`/v1/users/${userId}`);
      console.log(response);
      setOpponentUserProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOpponentUserProfile();
  }, []);
  const slideUp = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { type: "spring", damping: 15, stiffness: 100 } },
    exit: { y: "100%", opacity: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
  };

  const backgroundFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Background
          // Background에 대한 애니메이션 속성 추가
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          variants={backgroundFade}
          onClick={toggleProfileSheet}
        >
          <BottomContentWrapper
            isDarkMode={isDarkMode}
            onClick={handleWrapperClick}
            initial={"hidden"} // 초기 상태
            animate={isOpen ? "visible" : "partiallyVisible"} // 상태에 따른 애니메이션 값 지정
            exit={"exit"} // 컴포넌트가 unmount될 때 상태
            variants={slideUp} // 애니메이션 정의
          >
            <BottomContent isDarkMode={isDarkMode}>
              <BottomContentHeader isDarkMode={isDarkMode}>
                <Text
                  font={"Body_20"}
                  fontWeight={700}
                  letterSpacing={-1}
                  style={{
                    color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
                    textAlign: "center",
                    backgroundColor: isDarkMode ? palette.GRAY700 : palette.WHITE,
                    flex: 1,
                  }}
                >
                  {title}
                </Text>
                <AiOutlineClose
                  style={{
                    position: "absolute",
                    right: 17,
                    width: 30,
                    height: 30,
                    color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
                  }}
                  onClick={toggleProfileSheet}
                />
              </BottomContentHeader>
              <Avatar
                width={124}
                height={124}
                imgUrl={
                  opponentUserProfile.profileImageUrl ? opponentUserProfile.profileImageUrl : ""
                }
                margin={"24px 0 42px 0"}
              />
              <InterestButton
                nickName={opponentUserProfile.nickname}
                interests={opponentUserProfile.interests}
                isDarkMode={isDarkMode}
              />
            </BottomContent>
          </BottomContentWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default ProfileSheet;
