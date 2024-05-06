'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { createReduxStore } from '@/app/store';

import { TopLoader } from '@/shared/UI/TopLoader';

import ToastProvider from './all/withToast';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<TopLoader />
			{/* <SessionProvider> */}
			<Provider store={createReduxStore()}>
				<ToastProvider />
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</Provider>
			{/* </SessionProvider> */}
		</>
	);
};

export default Providers;
