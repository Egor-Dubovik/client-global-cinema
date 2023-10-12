import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import RootLayout from '@/components/RootLayout/RootLayout';

import './styles/globals.scss';

const inter = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Home page',
	description: 'Home page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
