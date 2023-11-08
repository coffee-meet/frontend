import styled from '@emotion/styled'
import { useState } from 'react'

const ApprovalList = () => <div>{'승인대기목록 내용'}</div>
const ReportList = () => <div>{'사용자신고내역 내용'}</div>
// 탭에서 보여줄 컴포넌트 리스트

interface TabProps {
  isActive: boolean
}

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState('approval')

  return (
    <>
      <TabsContainer>
        <Tab isActive={activeTab === 'approval'} onClick={() => setActiveTab('approval')}>
          {'승인대기목록'}
        </Tab>
        <Tab isActive={activeTab === 'report'} onClick={() => setActiveTab('report')}>
          {'사용자신고내역'}
        </Tab>
      </TabsContainer>

      <ContentContainer>
        {activeTab === 'approval' && <ApprovalList />}
        {activeTab === 'report' && <ReportList />}
      </ContentContainer>
    </>
  )
}

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
`

const ContentContainer = styled.div`
  width: 100%;
`
const Tab = styled.button<TabProps>`
  flex: 1;
  padding: 10px 20px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? '#ccc' : 'transparent')};
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid blue' : '1px solid #ccc')};
`

export default AdminTabs
