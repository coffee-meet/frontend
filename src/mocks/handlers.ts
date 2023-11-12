import { http, HttpResponse } from 'msw'
const nickname = '주다다'

export const handlers = [
  http.get(`/v1/users/duplicate?nickname=${nickname}`, async () => {
    await sleep(200)
    console.log()
    return HttpResponse.json({
      duplicate: true,
    })
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
]

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}
