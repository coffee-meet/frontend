import { QueryCache, QueryClient } from "@tanstack/react-query";

/**
 * 전역 QueryClientProvider에서 사용되는 QueryClient입니다.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      // alert('에러 발생! 올바른 경로로 서비스를 이용해주세요.')
      // window.location.href = '/'
    },
  }),
});
