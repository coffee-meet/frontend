// import { Messages } from '@/apis/chatting/chattingType'
import { FlexBox } from '@/components/common/Flexbox'
// import AdminListRow from '@/components/common/ListRow/AdminListRow'
import Spacing from '@/components/common/Spacing'

// interface MessageProps {
//   messageData: Messages[]
// }
const MessageArea = () => {
  return (
    <>
      <FlexBox direction={'column'} gap={20} fullWidth={true}>
        <Spacing size={20} />
      </FlexBox>
    </>
  )
}

export default MessageArea
