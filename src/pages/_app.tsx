import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from '@components/Toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 3 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toast />
      <Head>
        <title>눈사람 마을</title>
        <meta property="og:url" content="www.snowtown.team" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="눈사람 마을" />
        <meta property="og:description" content="친구들이 만들어주는 날 닮은 눈사람들" />
        <meta property="og:image" content="/image/roll-cropped.gif" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
