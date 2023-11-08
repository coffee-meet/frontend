import styled from '@emotion/styled'
import { useState } from 'react'

import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import AdminApprovalList from './AdminApprovalList'
import AdminReportList from './AdminReportList'

const ApprovalList = () => <AdminApprovalList />
const ReportList = () => <AdminReportList />
// 탭에서 보여줄 컴포넌트 리스트

interface TabProps {
  isActive: boolean
}

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState('approval')

  return (
    <>
      <StyledTabsContainer>
        <StyledLeftTab isActive={activeTab === 'approval'} onClick={() => setActiveTab('approval')}>
          <Text
            font={'Body_20'}
            fontWeight={600}
            letterSpacing={-1}
            textColor={activeTab === 'report' ? palette.GRAY300 : palette.BLACK}
          >
            {'승인 대기 목록'}
          </Text>
        </StyledLeftTab>
        <StyledRightTab isActive={activeTab === 'report'} onClick={() => setActiveTab('report')}>
          <Text
            font={'Body_20'}
            fontWeight={600}
            letterSpacing={-1}
            textColor={activeTab === 'approval' ? palette.GRAY300 : palette.BLACK}
          >
            {'사용자 신고 내역'}
          </Text>
        </StyledRightTab>
      </StyledTabsContainer>

      <StyledListContainer>
        {activeTab === 'approval' && <ApprovalList />}
        {activeTab === 'report' && <ReportList />}
      </StyledListContainer>
    </>
  )
}

const StyledTabsContainer = styled.div`
  background-color: ${palette.PRIMARY};
  display: flex;
  width: 100%;
`

const StyledListContainer = styled.div`
  width: 100%;
`
const StyledLeftTab = styled.button<TabProps>`
  flex: 1;
  padding: 30px 20px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? palette.GRAY100 : palette.WHITE)};
  border: none;
  border-radius: 30px 0 0 0;
`
const StyledRightTab = styled.button<TabProps>`
  flex: 1;
  padding: 30px 20px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? palette.GRAY100 : palette.WHITE)};
  border: none;
  border-radius: 0 30px 0 0;
`

export default AdminTabs