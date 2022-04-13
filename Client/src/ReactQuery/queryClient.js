import { QueryClient } from 'react-query';


export function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 600000, 
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

export const queryClient = generateQueryClient();
