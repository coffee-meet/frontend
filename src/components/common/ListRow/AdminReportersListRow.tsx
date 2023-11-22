import { FlexBox } from '@/components/common/Flexbox'
import { StyleList } from '@/components/common/ListRow/ProfileListRow'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

type AdminReportersListRowProps = {
  height: number
  reporterNickname: string
  reportedDate: string
  isDarkMode: boolean

  onClick?: () => void
}

const AdminReportersListRow = ({
  height,
  reporterNickname,
  reportedDate,
  isDarkMode,
  onClick,
}: AdminReportersListRowProps) => {
  const displayReporterNickname =
    reporterNickname.length > 4 ? `${reporterNickname.substring(0, 4)}...` : reporterNickname

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
          fontWeight={900}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY700 : palette.GRAY700,
            marginRight: '40px',
          }}
        >
          {displayReporterNickname}
        </Text>
        <Text
          font={'Body_16'}
          fontWeight={700}
          letterSpacing={0}
          style={{
            color: isDarkMode ? palette.GRAY400 : palette.GRAY400,
            marginLeft: '110px',
          }}
        >
          {reportedDate}
        </Text>
      </FlexBox>
    </StyleList>
  )
}

export default AdminReportersListRow
