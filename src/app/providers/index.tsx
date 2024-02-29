'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { TopLoader } from '@/shared/UI/TopLoader';
import { createReduxStore } from '@/shared/store';

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
			<Provider store={createReduxStore()}>
				<ToastProvider />
				<QueryClientProvider client={queryClient}>
					<SessionProvider>{children}</SessionProvider>
				</QueryClientProvider>
			</Provider>
		</>
	);
};

export default Providers;
