import { http, HttpResponse } from 'msw'

export const handlers = [
  // example
  http.get('/pets', () => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  }),
]
