import { FlexBox } from '@/components/common/Flexbox'
import { StyleList } from '@/components/common/ListRow/ProfileListRow'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

type AdminReportListRowProps = {
  height: number
  chattingRoomName: string
  targetedNickname: string
  reportedDate: string
  isDarkMode: boolean

  onClick?: () => void
}

const AdminReportListRow = ({
  height,
  chattingRoomName,
  targetedNickname,
  reportedDate,
  isDarkMode,
  onClick,
}: AdminReportListRowProps) => {
  return (
    <StyleList
      height={height}
      style={{
        borderBottom: `1px solid ${palette.GRAY300}`,
      }}
      onClick={onClick}
    >
      <FlexBox
        direction={'row'}
        justify={'center'}
        style={{
          width: '100%',
          textAlign: 'center',
          marginRight: '20px',
        }}
      >
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            flex: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {chattingRoomName}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            flex: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {targetedNickname}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            flex: 1,
            marginLeft: '10px',
          }}
        >
          {reportedDate}
        </Text>
      </FlexBox>
    </StyleList>
  )
}

export default AdminReportListRow
