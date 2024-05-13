import { Roboto } from 'next/font/google';

// Ubuntu_Mono
import Providers from '@/app/providers';

import { Navigation } from '@/widgets/Navigation';
import Sidebar from '@/widgets/Sidebar';

import styles from './styles/Layout.module.scss';
import './styles/globals.scss';

const inter = Roboto({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '700'],
});

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
