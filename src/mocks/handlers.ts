import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(`/v1/chatrooms/1/messages`, () => {
    return HttpResponse.json([
      {
        nickname: '유명한',
        content: '와라라라라',
        createdAt: '15:40',
      },
      {
        nickname: '주다현',
        content: '으갸갸갸갹',
        createdAt: '15:41',
      },
      {
        nickname: '닉네임이 뭐게',
        content: '오오오오오',
        createdAt: '15:42',
      },
    ])
  }),
]
