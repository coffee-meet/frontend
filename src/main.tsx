import { Global, ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { queryClient } from '@/apis/queryClient'
import { globalStyle } from '@/styles/index.tsx'
import { theme } from '@/styles/index.tsx'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={'/'}>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
