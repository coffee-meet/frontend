import { FlexBox } from "@/components/common/Flexbox";
import { StyleList } from "@/components/common/ListRow/ProfileListRow";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";

type AdminReportInfoListRowProps = {
  height: number;
  nickname: string;
  infoMessage: string | number;
  isDarkMode: boolean;
};
const AdminReportInfoListRow = ({
  height,
  nickname,
  infoMessage,
  isDarkMode,
}: AdminReportInfoListRowProps) => {
  const renderInfoMessage = () => {
    if (typeof infoMessage === "number") {
      return (
        <FlexBox>
          <Text
            font={"Caption_11"}
            fontWeight={900}
            letterSpacing={0}
            style={{
              color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
              marginRight: "2px",
            }}
          >
            {"누적 "}
          </Text>
          <Text
            font={"Body_16"}
            fontWeight={900}
            letterSpacing={0}
            style={{
              color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
            }}
          >
            {infoMessage}
          </Text>
          <Text
            font={"Caption_11"}
            fontWeight={900}
            letterSpacing={0}
            style={{
              color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
              marginLeft: "2px",
            }}
          >
            {" 회"}
          </Text>
        </FlexBox>
      );
    }
    return (
      <Text
        font={"Body_14"}
        fontWeight={900}
        letterSpacing={0}
        style={{
          color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
        }}
      >
        {infoMessage}
      </Text>
    );
  };

  return (
    <StyleList
      width={372}
      height={height}
      style={{
        padding: "0 20px 0px 20px",
        borderBottom: `1px solid ${palette.GRAY300}`,
      }}
    >
      <Text
        font={"Body_16"}
        fontWeight={700}
        letterSpacing={0}
        style={{
          color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
        }}
      >
        {nickname}
      </Text>
      {renderInfoMessage()}
    </StyleList>
  );
};

export default AdminReportInfoListRow;
