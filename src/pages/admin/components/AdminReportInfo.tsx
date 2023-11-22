import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

import AdminReportAPI from '@/apis/adminReport/AdminReportApi'
import NormalButton from '@/components/common/Buttons/NormalButton'
import AdminReportInfoListRow from '@/components/common/ListRow/AdminReportInfoListRow'
import Spacing from '@/components/common/Spacing'
import { useModal } from '@/hooks/useModal'
import { palette } from '@/styles/palette'

import AdminPageHeader from './AdminPageHeader'

interface AdminReportInfoProps {
  selectedReportNickname: string
}

const AdminReportInfo = ({ selectedReportNickname }: AdminReportInfoProps) => {
  const mutationReportAddCount = useMutation(AdminReportAPI.POST_REPORT_ADD, {
    onSuccess: (data) => {
      console.log(data)
    },
  })
  const mutationReportIgnore = useMutation(AdminReportAPI.POST_REPORT_IGNORE, {
    onSuccess: (data) => {
      console.log(data)
    },
  })
  const onReportAddCount = () => {
    mutationReportAddCount.mutate()
  }
  const onReportIgnore = () => {
    mutationReportIgnore.mutate()
  }
  const { data, isSuccess } = useQuery(['ReportedUserInfo'], AdminReportAPI.GET_REPORT_INFO)
  console.log(isSuccess && data)
  const { openModal } = useModal()
  const handleAccumulationAddBtn = () => {
    openModal({
      type: 'confirm',
      mainText: '신고를 누적하시겠습니까?',
      okFunc: onReportAddCount,
    })
  }
  return (
    <StyledAdminReportInfoOuterWrapper>
      <AdminPageHeader username={selectedReportNickname} />
      <StyledReportInfoListOuterWrapper>
        <StyledReportInfoListWrapper>
          <AdminReportInfoListRow
            nickname={'신고자'}
            height={84}
            infoMessage={'박은지(닉네임 명)'}
            isDarkMode={false}
          />
          <AdminReportInfoListRow
            nickname={'일시'}
            height={84}
            infoMessage={'2021.09.01 12:00:00'}
            isDarkMode={false}
          />
          <AdminReportInfoListRow
            nickname={'신고 사유'}
            height={84}
            infoMessage={'채팅방 내 잠수'}
            isDarkMode={false}
          />
          <AdminReportInfoListRow
            nickname={'현재 누적 횟수'}
            height={84}
            infoMessage={'누적 2회'}
            isDarkMode={false}
          />
          <AdminReportInfoListRow
            nickname={'해당 사용자 메일'}
            height={84}
            infoMessage={'famous@naver.com'}
            isDarkMode={false}
          />
        </StyledReportInfoListWrapper>
      </StyledReportInfoListOuterWrapper>

      <StyledAdminReportInfoContainer>
        <Spacing size={28} />
        <StyledButtonsWrapper>
          <NormalButton onClick={handleAccumulationAddBtn} normalButtonType={'admin-accept'}>
            {'누적 추가'}
          </NormalButton>
          <NormalButton onClick={onReportIgnore} normalButtonType={'admin-deny'}>
            {'무시'}
          </NormalButton>
        </StyledButtonsWrapper>
        <Spacing size={18} />
      </StyledAdminReportInfoContainer>
      <StyledBelowWhiteSpace></StyledBelowWhiteSpace>
    </StyledAdminReportInfoOuterWrapper>
  )
}

const StyledAdminReportInfoOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
  overflow: scroll;
  height: 662px;
`

const StyledAdminReportInfoContainer = styled.div`
  background-color: ${palette.WHITE};
`

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 60px 0 25px 0;
`
const StyledReportInfoListWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledReportInfoListOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
`
const StyledBelowWhiteSpace = styled.div`
  background-color: ${palette.WHITE};
`
export default AdminReportInfo
