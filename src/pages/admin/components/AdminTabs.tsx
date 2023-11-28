import styled from '@emotion/styled'
import { useState } from 'react'

import AdminApprovalList from '@/components/common/ListRow/AdminApprovalList'
import AdminInquiryList from '@/components/common/ListRow/AdminInquiryList'
import AdminReportersList from '@/components/common/ListRow/AdminReportersList'
import AdminReportList from '@/components/common/ListRow/AdminReportList'
import { Text } from '@/components/common/Text'
import AdminApprovalInfo from '@/pages/admin/components/AdminApprovalInfo'
import AdminReportInfo from '@/pages/admin/components/AdminReportInfo'
import { palette } from '@/styles/palette'

import AdminInquiryInfo from './AdminInquiryInfo'

interface TabProps {
  isActive: boolean
}

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState('approval')
  const [selectedApprovalNickname, setSelectedApprovalNickname] = useState<string>('')
  const [selectedInquiryNickname, setSelectedInquiryNickname] = useState<string>('')
  const [selectedReportedNickname, setSelectedReportedNickname] = useState<string>('')
  const [selectedReporterNickname, setSelectedReporterNickname] = useState<string>('')
  console.log('신고자 닉네임: ' + selectedReporterNickname)

  const handleApprovalSelectUserName = (approvalNickname: string) => {
    setSelectedApprovalNickname(approvalNickname)
    setActiveTab('approvalInfo')
  }
  const handleInquirySelectUserName = (inquiryNickname: string) => {
    //inquiryID로 상세정보 조회할 시, 바꿀 부분. props명도 전부 바꾸면 됨.
    setSelectedInquiryNickname(inquiryNickname)
    setActiveTab('inquiryInfo')
  }
  const handleReportSelectUserName = (reportedNickname: string) => {
    //targetedId, chattingRoomId 중 하나로 변수 바꾸고, 나머지 하나는 추가. (신고 전체 리스트 중 하나 클릭 할 때의 targetedId, chattingRoomId)
    setSelectedReportedNickname(reportedNickname)
    setActiveTab('reportersList')
  }
  const handleReportersSelectUserName = (reporterNickname: string) => {
    setSelectedReporterNickname(reporterNickname)
    setActiveTab('reportInfo')
  }

  // 탭에서 보여줄 컴포넌트들
  const renderTabContent = () => {
    switch (activeTab) {
      case 'approval':
        return <AdminApprovalList onApproveSelectUserName={handleApprovalSelectUserName} />
      case 'approvalInfo':
        return <AdminApprovalInfo selectedApprovalNickname={selectedApprovalNickname} />
      case 'inquiry':
        return <AdminInquiryList onInquirySelectUserName={handleInquirySelectUserName} />
      case 'inquiryInfo':
        return <AdminInquiryInfo selectedInquiryNickname={selectedInquiryNickname} />
      case 'report':
        return <AdminReportList onReportSelect={handleReportSelectUserName} />
      case 'reportersList':
        return (
          <AdminReportersList
            selectedReportNickname={selectedReportedNickname}
            onReportSelect={handleReportersSelectUserName}
          />
        )
      case 'reportInfo':
        return <AdminReportInfo selectedReporterNickname={selectedReportedNickname} />
      default:
        return null
    }
  }
  return (
    <>
      <StyledListContainer>{renderTabContent()}</StyledListContainer>
      <StyledTabsContainer>
        <StyledTab isActive={activeTab === 'approval'} onClick={() => setActiveTab('approval')}>
          <Text font={'Body_18'} fontWeight={900} letterSpacing={-0.5}>
            {'승인 대기 목록'}
          </Text>
        </StyledTab>
        <StyledTab isActive={activeTab === 'inquiry'} onClick={() => setActiveTab('inquiry')}>
          <Text font={'Body_18'} fontWeight={900} letterSpacing={-0.5}>
            {'문의 사항 처리'}
          </Text>
        </StyledTab>
        <StyledTab isActive={activeTab === 'report'} onClick={() => setActiveTab('report')}>
          <Text font={'Body_18'} fontWeight={900} letterSpacing={-0.5}>
            {'사용자 신고내역'}
          </Text>
        </StyledTab>
      </StyledTabsContainer>
    </>
  )
}

const StyledTabsContainer = styled.div`
  background-color: ${palette.PRIMARY};
  display: flex;
  width: 100%;
  height: 71px;
  align-items: center;
`

const StyledListContainer = styled.div`
  width: 100%;
`

const StyledTab = styled.div<TabProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 27px 10px 24px 16px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? palette.GRAY100 : palette.WHITE)};
  border: 1.5px solid ${palette.GRAY100};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => (props.isActive ? palette.GRAY300 : palette.GRAY300)};
`

export default AdminTabs
