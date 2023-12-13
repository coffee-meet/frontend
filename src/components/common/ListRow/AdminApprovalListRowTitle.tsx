import { FlexBox } from "@/components/common/Flexbox";
import { StyleList } from "@/components/common/ListRow/ProfileListRow";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";

type AdminReportListRowProps = {
  height: number;
  frontName: string;
  backName: string;
  isDarkMode: boolean;

  onClick?: () => void;
};

const AdminApprovalListRowTitle = ({
  height,
  frontName,
  backName,
  isDarkMode,
  onClick,
}: AdminReportListRowProps) => {
  return (
    <StyleList
      width={322}
      height={height}
      style={{
        padding: "0 10px 0px 10px",
        borderBottom: `1px solid ${palette.GRAY300}`,
        cursor: "default",
      }}
      onClick={onClick}
    >
      <FlexBox justify={"center"}>
        <Text
          font={"Body_16"}
          fontWeight={800}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
            marginRight: "14px",
          }}
        >
          {frontName}
        </Text>
        <Text
          font={"Body_16"}
          fontWeight={800}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
            marginLeft: "172px",
          }}
        >
          {backName}
        </Text>
      </FlexBox>
    </StyleList>
  );
};

export default AdminApprovalListRowTitle;
