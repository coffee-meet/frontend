import { http, HttpResponse } from 'msw'

import { Approval, ApprovalInfo, ReportInfo, Reports } from './handlersInterface'

export const handlers = [
  // example
  http.get('/pets', () => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  }),
  // 승인 목록 API 핸들러
  http.get('/admin/approvals', () => {
    const approvals: Approval[] = [
      { name: '박상민', status: '대기 중' },
      { name: '유명한', status: '대기 중' },
    ]
    return HttpResponse.json({ approvals })
  }),

  // 승인 상세 정보 API 핸들러
  http.get('/admin/approvals/:userId', (req) => {
    const { userId } = req.params
    const approvalInfo: ApprovalInfo = {
      name: `userName, userId:${userId}`,
      email: `userName의Email, userId:${userId}@example.com`,
      businessCardImage: `https://example.com/userId:${userId}.svg`,
    }
    return HttpResponse.json({ approvalInfo })
  }),

  // 승인/거절 처리 API 핸들러
  // http.post('/admin/approvals/:userId/action', (req) => {
  //   const { userId } = req.params
  //   const { action } = req.body
  //   const approvalResult: ApprovalResult = {
  //     result: action === 'accept' ? 'accepted' : 'rejected',
  //   }
  //   return HttpResponse.json({ approvalResult })
  // }),

  // 신고 목록 API 핸들러
  http.get('/admin/reports', () => {
    const reports: Reports[] = [
      { reportedUserName: '유명한', reportCount: 2 },
      { reportedUserName: '박상민', reportCount: 1 },
    ]
    return HttpResponse.json({ reports })
  }),

  // 신고 상세 정보 API 핸들러
  http.get('/admin/reports/:userId', (req) => {
    const { userId } = req.params
    const reportInfo: ReportInfo = {
      reportedUserName: `userName, userId:${userId}`,
      reporterUserName: 'reporterUserName',
      reportDate: new Date().toISOString(),
      reason: 'saying swear words',
      reportCount: 3,
      email: `userId:${userId}@example.com`,
    }
    return HttpResponse.json({
      reportInfo,
    })
  }),

  // // 신고 처리 API 핸들러
  // http.post('/admin/reports/:userId/action', (req) => {
  //   const { userId } = req.params
  //   const { action } = req.body
  //   const reportResult: ReportResult = {
  //     result: action === 'addCount' ? 'countAdded' : 'ignored',
  //   }
  //   return HttpResponse.json({ reportResult })
  // }),
]
