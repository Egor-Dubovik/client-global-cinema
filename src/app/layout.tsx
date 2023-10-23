import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import Providers from '@/app/providers';

import { Navigation } from '@/widgets/Navigation';
import Sidebar from '@/widgets/Sidebar';

import { TITLE_TEMPLATE } from '@/shared/config/seo/constants';

import styles from './styles/Layout.module.scss';
import './styles/globals.scss';

const inter = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: {
		template: TITLE_TEMPLATE,
		default: '404',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<div className={styles.layout}>
						<Navigation className={styles.sidebarLeft} />
						<main className={styles.mainContent}>{children}</main>
						<Sidebar className={styles.sidebarRight} />
					</div>
				</Providers>
			</body>
		</html>
	);
}
