import { rest } from 'msw'
const nickname = '주다다'

export const handlers = [
  rest.get(`/v1/users/duplicate?nickname=${nickname}`, async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(res))
  }),
]

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}
