import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "normalize.css";
import "@styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
