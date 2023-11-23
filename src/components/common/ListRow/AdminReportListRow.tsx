import { FlexBox } from '@/components/common/Flexbox'
import { StyleList } from '@/components/common/ListRow/ProfileListRow'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

type AdminReportListRowProps = {
  height: number
  chattingRoomName: string
  reportedNickname: string
  reportedDate: string
  isDarkMode: boolean

  onClick?: () => void
}

const AdminReportListRow = ({
  height,
  chattingRoomName,
  reportedNickname,
  reportedDate,
  isDarkMode,
  onClick,
}: AdminReportListRowProps) => {
  const displayChattingRoomName =
    chattingRoomName.length > 4 ? `${chattingRoomName.substring(0, 4)}..` : chattingRoomName
  const displayReportedNickname =
    reportedNickname.length > 3 ? `${reportedNickname.substring(0, 3)}..` : reportedNickname
  return (
    <StyleList
      width={322}
      height={height}
      style={{
        padding: '0 20px 0px 20px',
        borderBottom: `1px solid ${palette.GRAY300}`,
      }}
      onClick={onClick}
    >
      <FlexBox>
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            marginRight: '40px',
          }}
        >
          {displayChattingRoomName}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            margin: '0 10px',
          }}
        >
          {displayReportedNickname}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            marginLeft: '34px',
          }}
        >
          {reportedDate}
        </Text>
      </FlexBox>
    </StyleList>
  )
}

export default AdminReportListRow
