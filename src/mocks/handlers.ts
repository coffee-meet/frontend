import { http, HttpResponse } from 'msw'

import {
  AdminLoginInfo,
  Approval,
  ApprovalInfo,
  ApprovalResult,
  Inquiry,
  Reporters,
  ReportInfo,
  ReportResult,
  Reports,
} from './handlersInterface'
const nickname = '주다다'

export const handlers = [
  // example
  http.get('/pets', () => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  }),

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
      },
    ])
  }),
  http.delete(`/v1/chatrooms/1`, () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: '삭제 완료',
    })
  }),
  http.get(`/v1/chatting/rooms/1`, () => {
    return HttpResponse.json([
      {
        messageId: 7446,
        nickname: 'ZWREDID',
        content: 'JCKSJFM',
        createdAt: '2080-04-24T13:01:25.104160649',
      },
      {
        messageId: 7654,
        nickname: 'EMKCMQFJMN',
        content: 'GMIQT',
        createdAt: '2005-05-29T23:40:42.380207854',
      },
      {
        messageId: 4582,
        nickname: 'NOHMUDVUSC',
        content: 'WPX와라라라라랄ㄹ라라라랄',
        createdAt: '2013-02-01T17:44:39.934666315',
      },
      {
        messageId: 7933,
        nickname: 'IDZNJHE',
        content: 'WNZUZBRL와라라라라랄ㄹ라라라랄',
        createdAt: '2073-10-08T07:45:49.877123645',
      },
      {
        messageId: 812,
        nickname: 'PPMQ',
        content: 'MGHAWBFEP와라라라라랄ㄹ라라라랄',
        createdAt: '1971-09-26T14:23:16.425577078',
      },
      {
        messageId: 9171,
        nickname: 'BMNB',
        content: 'LSHL와라라라라랄ㄹ라라라랄',
        createdAt: '2008-07-13T23:36:55.533629238',
      },
      {
        messageId: 3718,
        nickname: 'VICJDZOOGF',
        content: 'WFTWGWTKBY와라라라라랄ㄹ라라라랄',
        createdAt: '2056-12-17T21:18:44.262192453',
      },
      {
        messageId: 3455,
        nickname: 'PVCFA',
        content: 'JTN와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2018-10-31T05:13:20.968140667',
      },
      {
        messageId: 5703,
        nickname: 'THUIO',
        content: 'XZXHBIK와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2023-05-27T03:26:51.124659514',
      },
      {
        messageId: 6914,
        nickname: 'LCSLFI',
        content: 'QDH와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2008-12-14T06:30:12.657522165',
      },
      {
        messageId: 5255,
        nickname: 'MPCACR',
        content:
          'OEYI와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2012-09-01T20:45:54.946951577',
      },
      {
        messageId: 2544,
        nickname: 'KPV',
        content:
          'GTTGHKZORK와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄 ',
        createdAt: '2007-12-05T00:24:19.484941744',
      },
      {
        messageId: 1325,
        nickname: 'RNEPLM',
        content: 'DCQJIX와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2082-05-17T07:53:03.051337821',
      },
      {
        messageId: 1932,
        nickname: 'EENVI',
        content:
          'IEKNKHJ와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2064-11-14T20:55:24.851249176',
      },
      {
        messageId: 474,
        nickname: 'NLCNYWD',
        content:
          'QNNJY와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '1991-12-23T16:00:39.675189942',
      },
      {
        messageId: 9269,
        nickname: 'FLEE',
        content: 'QQE',
        createdAt: '2030-10-10T00:43:31.72951732',
      },
      {
        messageId: 7394,
        nickname: 'ITCDVGPEX',
        content:
          'ANMGSXLYL와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2070-02-27T15:12:32.544116729',
      },
      {
        messageId: 7344,
        nickname: 'QSAJ',
        content:
          'BIK와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄와라라라라랄ㄹ라라라랄',
        createdAt: '2065-10-08T21:49:48.130735954',
      },
      {
        messageId: 9822,
        nickname: 'XDPBJXCZ',
        content:
          'FQYUOH으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹',
        createdAt: '1985-07-14T09:04:29.122377397',
      },
      {
        messageId: 1321,
        nickname: 'RYBMBCGQY',
        content:
          'KSBDDBOFIX으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹',
        createdAt: '2082-04-22T15:36:23.636192181',
      },
      {
        messageId: 9357,
        nickname: 'MKWE',
        content:
          'FXBHYMLBVO으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹으갸갸갸갸ㅑ갸갸갸갸갹',
        createdAt: '2049-06-08T03:43:18.715910816',
      },
      {
        messageId: 8214,
        nickname: 'VDWE',
        content: 'RKJOORTPXF',
        createdAt: '1994-08-04T23:39:15.226775267',
      },
      {
        messageId: 8556,
        nickname: 'CKN',
        content: 'TKRFFGJWPY',
        createdAt: '1984-04-03T03:16:24.273319631',
      },
      {
        messageId: 2272,
        nickname: 'JPEMOIZR',
        content: 'ZUIIFMZGV',
        createdAt: '1993-10-30T16:45:11.160251527',
      },
      {
        messageId: 9452,
        nickname: 'OASS',
        content: 'GCM',
        createdAt: '2045-11-15T08:08:42.193992168',
      },
      {
        messageId: 2439,
        nickname: 'QCDJF',
        content: 'EYXB',
        createdAt: '2064-10-01T23:15:16.865270273',
      },
      {
        messageId: 5004,
        nickname: 'VNHS',
        content: 'RCZI',
        createdAt: '2016-11-13T10:17:11.492493489',
      },
      {
        messageId: 9879,
        nickname: 'HHDYPTYOZ',
        content: 'IQSLJX',
        createdAt: '2045-01-26T13:11:05.916388939',
      },
      {
        messageId: 9589,
        nickname: 'MJCNPWG',
        content: 'LYMJ',
        createdAt: '2029-02-16T07:23:29.753928566',
      },
      {
        messageId: 9786,
        nickname: 'UMLJC',
        content: 'LZYUCYSV',
        createdAt: '1993-05-13T17:11:42.900222395',
      },
      {
        messageId: 7973,
        nickname: 'REIQW',
        content: 'CLKCE',
        createdAt: '2071-01-22T00:17:02.571309299',
      },
      {
        messageId: 2757,
        nickname: 'UBKIXQFERG',
        content: 'QCZGRCGRB',
        createdAt: '2074-09-28T03:32:38.329864507',
      },
      {
        messageId: 2426,
        nickname: 'KEOSPMMHO',
        content: 'ZGBIR',
        createdAt: '2084-10-21T03:35:15.439134581',
      },
      {
        messageId: 7269,
        nickname: 'AJFGLK',
        content: 'DBTCYUHHV',
        createdAt: '2085-05-05T05:15:40.533347276',
      },
      {
        messageId: 8045,
        nickname: 'KHQ',
        content: 'KRQBWRYWM',
        createdAt: '2086-01-13T09:25:23.355797009',
      },
      {
        messageId: 3805,
        nickname: 'CMZRJBBOFQ',
        content: 'XZDNCJ',
        createdAt: '2086-01-14T15:25:28.784256705',
      },
      {
        messageId: 4446,
        nickname: 'YHUJOPCYOZ',
        content: 'VOCXWVR',
        createdAt: '2072-12-10T04:05:38.377948843',
      },
      {
        messageId: 6992,
        nickname: 'SNICEXO',
        content: 'DEAAAOIERA',
        createdAt: '2084-01-19T02:31:28.10156004',
      },
      {
        messageId: 8837,
        nickname: 'YMHZCIXQYS',
        content: 'BLEUICQJBX',
        createdAt: '2080-03-20T12:48:43.985685155',
      },
      {
        messageId: 9272,
        nickname: 'FDQ',
        content: 'BGRLRIXRY',
        createdAt: '2065-05-18T01:14:53.643586616',
      },
      {
        messageId: 1127,
        nickname: 'HKNX',
        content: 'CFFVOIQ',
        createdAt: '2039-05-22T17:42:37.222510635',
      },
      {
        messageId: 559,
        nickname: 'ZOHSOV',
        content: 'IGLIDFM',
        createdAt: '2030-10-01T02:33:38.932464891',
      },
      {
        messageId: 3617,
        nickname: 'BZY',
        content: 'LNW',
        createdAt: '1984-07-29T21:39:13.409232953',
      },
      {
        messageId: 6745,
        nickname: 'EUKMHU',
        content: 'XTTVPEPVF',
        createdAt: '1972-09-11T04:47:08.429625468',
      },
      {
        messageId: 7898,
        nickname: 'LSZBLE',
        content: 'IPONZ',
        createdAt: '2064-11-23T22:30:13.542865588',
      },
      {
        messageId: 740,
        nickname: 'RUTDX',
        content: 'QNJXJ',
        createdAt: '1982-10-25T04:12:13.674779827',
      },
      {
        messageId: 4071,
        nickname: 'CKYRRMOSSX',
        content: 'NDQ',
        createdAt: '2023-01-15T00:00:51.84289022',
      },
      {
        messageId: 2077,
        nickname: 'ODYRXZ',
        content: 'YYYJZ',
        createdAt: '1998-08-26T21:06:04.675372254',
      },
      {
        messageId: 7836,
        nickname: 'OGTP',
        content: 'VIOFGHWR',
        createdAt: '2016-08-03T14:48:03.095309125',
      },
      {
        messageId: 4653,
        nickname: 'LLYRSRAA',
        content: 'JHDA',
        createdAt: '2003-06-20T09:42:20.444764003',
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
  http.get('/v1/users/approvals', () => {
    const approvals: Approval[] = [
      { approvalRequestUser: '유명한', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '박은지', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '주다현', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '남궁호수', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '박상민', approvalRequestUserStatus: '대기 중' },
      { approvalRequestUser: '우창욱', approvalRequestUserStatus: '대기 중' },
    ]
    return HttpResponse.json({ approvals })
  }),

  // 승인 상세 정보 API 핸들러
  http.get('/v1/useres/inquries/:inquryId', (req) => {
    const { userId } = req.params
    const approvalInfo: ApprovalInfo = {
      approvalRequestUserName: `userId:${userId}에 해당하는  userName`,
      approvalRequestUserEmail: `userId:${userId}에 해당하는 userName의 Email`,
      approvalRequestUserBusinessCardImage: `https://www.imageExample.jpg`,
    }

    return HttpResponse.json({ approvalInfo })
  }),
  // 관리자 로그인 요청 API 핸들러
  http.post('/v1/admins/login', async ({ request }) => {
    const adminData = await request.text()
    const { adminId, adminPw } = JSON.parse(adminData)
    const isValidUser = adminId === 'expectedId' && adminPw === 'expectedPassword'
    const adminLoginInfo: AdminLoginInfo = {
      adminLoginResult: isValidUser ? 'success' : 'error',
      adminLoginMessage: isValidUser ? 'Authentication successful' : 'Invalid credentials',
    }
    return HttpResponse.json({
      adminLoginInfo,
    })
  }),

  // 관리자 회사승인 동의 API 핸들러
  http.post('/v1/certification/users/:userId/accept', async ({ request }) => {
    const decisionString = await request.text()
    const { decision } = JSON.parse(decisionString)
    const decisionMaking = decision === 'approve'
    const approvalResult: ApprovalResult = {
      result: decisionMaking === true ? 'accepted' : 'error',
    }
    return HttpResponse.json({ approvalResult })
  }),

  // 관리자 회사승인 거절 API 핸들러
  http.post('/v1/certification/users/:userId/reject', async ({ request }) => {
    const decisionString = await request.text()
    const { decision } = JSON.parse(decisionString)
    const decisionMaking = decision === 'reject'
    const approvalResult: ApprovalResult = {
      result: decisionMaking === true ? 'rejected' : 'error',
    }
    return HttpResponse.json({ approvalResult })
  }),

  // 신고 목록 API 핸들러
  http.get('/v1/reports', () => {
    const reports: Reports[] = [
      { chattingRoomName: '채팅방1', reportedUserName: '유명한', reportedDate: '2023.11.23' },
      { chattingRoomName: '채팅방2', reportedUserName: '박상민', reportedDate: '2023.11.22' },
      { chattingRoomName: '채팅방3', reportedUserName: '박은지', reportedDate: '2023.11.22' },
      { chattingRoomName: '채팅방4', reportedUserName: '주다현', reportedDate: '2023.11.15' },
      { chattingRoomName: '채팅5', reportedUserName: '남궁호수', reportedDate: '2023.10.29' },
      { chattingRoomName: '채팅방6', reportedUserName: '우창욱', reportedDate: '2023.10.26' },
      { chattingRoomName: '채팅방칠', reportedUserName: '유명한', reportedDate: '2023.10.26' },
      { chattingRoomName: '채팅방팔', reportedUserName: '박상민', reportedDate: '2023.10.26' },
      { chattingRoomName: '채팅방9', reportedUserName: '박은지', reportedDate: '2023.10.23' },
    ]
    return HttpResponse.json({ reports })
  }),
  // 신고자 목록 API 핸들러
  http.get('/v1/reporters', () => {
    const reporters: Reporters[] = [
      { reporterUserName: '박은지', reportedDate: '2023.11.23' },
      { reporterUserName: '유명한', reportedDate: '2021.11.21' },
      { reporterUserName: '박상민', reportedDate: '2021.11.15' },
    ]
    return HttpResponse.json({ reporters })
  }),

  // 신고 상세 정보 API 핸들러
  http.get('/v1/reports/:reportId', (req) => {
    const { userId } = req.params
    const reportInfo: ReportInfo = {
      reportedUserName: `reporterUserName, userId:${userId}`,
      reportDate: new Date().toISOString(),
      reason: 'saying swear words',
      reportCount: 3,
      email: `userId:${userId}@example.com`,
    }
    return HttpResponse.json({
      reportInfo,
    })
  }),

  // 신고 승인 처리 API 핸들러
  http.post('/v1/reports/accept/:reportId', async ({ request }) => {
    const decisionString = await request.text()
    const { decision } = JSON.parse(decisionString)
    const decisionMaking = decision === 'addReportCount'
    const reportResult: ReportResult = {
      result: decisionMaking === true ? 'reportCountAdded' : 'error',
    }
    return HttpResponse.json({ reportResult })
  }),

  // 신고 거절 처리 API 핸들러
  http.delete('/v1/reports/reject/:reportId', async () => {
    return HttpResponse.json({
      result: 'reportDeleted',
    })
  }),

  // 문의 목록 API 핸들러
  http.get('/v1/users/inquiries', () => {
    const inquiries: Inquiry[] = [
      { inquiryRequestUser: '박상민', inquiryRequestDate: '2023.11.22' },
      { inquiryRequestUser: '박은지', inquiryRequestDate: '2023.11.22' },
      { inquiryRequestUser: '주다현', inquiryRequestDate: '2023.11.22' },
      { inquiryRequestUser: '남궁호수', inquiryRequestDate: '2023.11.21' },
      { inquiryRequestUser: '유명한', inquiryRequestDate: '2023.11.21' },
      { inquiryRequestUser: '박상민', inquiryRequestDate: '2023.11.17' },
      { inquiryRequestUser: '남궁호수', inquiryRequestDate: '2023.11.17' },
      { inquiryRequestUser: '주다현', inquiryRequestDate: '2023.11.17' },
      { inquiryRequestUser: '박은지', inquiryRequestDate: '2023.11.17' },
      { inquiryRequestUser: '우창욱', inquiryRequestDate: '2023.11.10' },
      { inquiryRequestUser: '유명한', inquiryRequestDate: '2023.11.10' },
    ]
    return HttpResponse.json({ inquiries })
  }),
]
