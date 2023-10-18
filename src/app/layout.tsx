import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import { Navigation } from '@/widgets/Navigation';
import Sidebar from '@/widgets/Sidebar/Sidebar';

import styles from './styles/Layout.module.scss';
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
				<div className={styles.layout}>
					<Navigation className={styles.sidebarLeft} />
					<main className={styles.mainContent}>{children}</main>
					<Sidebar className={styles.sidebarRight} />
				</div>
			</body>
		</html>
	);
}
