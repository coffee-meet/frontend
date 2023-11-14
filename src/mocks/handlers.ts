import { http, HttpResponse } from 'msw'

import businessCard from '@/assets/images/businessCard.jpg'

import { Approval, ApprovalInfo, ReportInfo, Reports } from './handlersInterface'
const nickname = '주다다'

export const handlers = [
  // example
  http.get('/pets', () => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  }),

  http.get('/v1/histories', () => {
    return HttpResponse.json([
      {
        title: '🥤️ 차가운 아메리카노-6',
        participants: ['우땅', '빅맘', '롤로노아 조로'],
        createdAt: '2023-11-05T22:00:00',
      },
      {
        title: '🧃 미지근한 사과주스-23',
        participants: ['우땅', '빅맘', '루피'],
        createdAt: '2023-11-05T22:30:00',
      },
      {
        title: '☕️ 따뜻한 아메리카노-10',
        participants: ['우땅', '빅맘', '나미'],
        createdAt: '2023-11-05T23:00:00',
      },
      {
        title: '🍰️ 차가운 케이크-8',
        participants: ['우땅', '빅맘', '상디'],
        createdAt: '2023-11-05T24:00:00',
      },
      {
        title: '🍦 고소한 아이스크림-2',
        participants: ['우땅', '빅맘', '우솝'],
        createdAt: '2023-11-06T00:10:50',
      },
    ])
  }),

  http.get(`/v1/users/duplicate?nickname=${nickname}`, () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: 'Out Of Apples',
    })
  }),

  // example
  http.get('/pets', () => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  }),
  // 승인 목록 API 핸들러
  http.get('/admin/approvals', () => {
    const approvals: Approval[] = [
      { approvalRequestUser: '박상민', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '박은지', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '주다현', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '남궁호수', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '우창욱', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '홍길동', approvalRequestUserStatus: '대기 중' },
    ]
    return HttpResponse.json({ approvals })
  }),

  // 승인 상세 정보 API 핸들러
  http.get('/admin/approvals/:userId', (req) => {
    const { userId } = req.params
    const approvalInfo: ApprovalInfo = {
      approvalRequestUserName: `userId:${userId}에 해당하는 userName`,
      approvalRequestUserEmail: `userId:${userId}에 해당하는 userName의 Email`,
      approvalRequestUserBusinessCardImage: businessCard,
    }

    return HttpResponse.json({ approvalInfo })
  }),

  // 승인/거절 처리 API 핸들러
  // req.body 오류 해결이 필요한 부분
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
      { reportedUserName: '유명한', reportCount: 1 },
      { reportedUserName: '박상민', reportCount: 2 },
      { reportedUserName: '박은지', reportCount: 1 },
      { reportedUserName: '주다현', reportCount: 1 },
      { reportedUserName: '남궁호수', reportCount: 1 },
      { reportedUserName: '우창욱', reportCount: 1 },
      { reportedUserName: '홍길동', reportCount: 0 },
      { reportedUserName: '홍길동', reportCount: 2 },
      { reportedUserName: '홍길동', reportCount: 3 },
      { reportedUserName: '홍길동', reportCount: 1 },
      { reportedUserName: '홍길동', reportCount: 2 },
      { reportedUserName: '홍길동', reportCount: 3 },
      { reportedUserName: '홍길동', reportCount: 1 },
      { reportedUserName: '홍길동', reportCount: 0 },
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
  // req.body 오류 해결이 필요한 부분
  // http.post('/admin/reports/:userId/action', (req) => {
  //   const { userId } = req.params
  //   const { action } = req.body
  //   const reportResult: ReportResult = {
  //     result: action === 'addCount' ? 'countAdded' : 'ignored',
  //   }
  //   return HttpResponse.json({ reportResult })
  // }),
]
