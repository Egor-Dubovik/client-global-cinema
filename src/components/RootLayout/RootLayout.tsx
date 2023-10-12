import { ReactNode } from 'react';

import Navigation from '@/components/Navigation/Navigation';
import Sidebar from '@/components/Sidebar/Sidebar';

import styles from './RootLayout.module.scss';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.main}>{children}</div>
			<Sidebar />
		</div>
	);
};

export default RootLayout;
