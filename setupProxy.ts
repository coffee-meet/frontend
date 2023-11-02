import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api/chat-stomp', {
      target: process.env.VITE_BASE_URL,
      ws: true,
    }),
  )
}
