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

const AdminReportListRowTitle = ({
  height,
  chattingRoomName,
  reportedNickname,
  reportedDate,
  isDarkMode,
  onClick,
}: AdminReportListRowProps) => {
  return (
    <StyleList
      width={322}
      height={height}
      style={{
        padding: '0 10px 0px 10px',
        borderBottom: `1px solid ${palette.GRAY300}`,
      }}
      onClick={onClick}
    >
      <FlexBox justify={'center'}>
        <Text
          font={'Body_16'}
          fontWeight={800}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
            marginRight: '14px',
          }}
        >
          {chattingRoomName}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={800}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
            margin: '0 10px',
          }}
        >
          {reportedNickname}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={800}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
            marginLeft: '14px',
          }}
        >
          {reportedDate}
        </Text>
      </FlexBox>
    </StyleList>
  )
}

export default AdminReportListRowTitle
