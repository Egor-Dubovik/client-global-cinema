'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import AuthProvider from '@/app/providers/all/withAuth';
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
				<AuthProvider>
					<ToastProvider />
					<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
				</AuthProvider>
			</Provider>
			{/* </SessionProvider> */}
		</>
	);
};

export default Providers;
