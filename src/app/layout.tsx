import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import Navigation from '@/components/Navigation/Navigation';
import RootLayout from '@/components/RootLayout/RootLayout';
import Sidebar from '@/components/Sidebar/Sidebar';

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
				<RootLayout
					renderHeader={() => <div>header</div>}
					renderSidebarLeft={() => <Navigation />}
					renderMainContent={() => children}
					renderSidebarRight={() => <Sidebar />}
					renderFooter={() => <div>footer</div>}
				/>
			</body>
		</html>
	);
}
