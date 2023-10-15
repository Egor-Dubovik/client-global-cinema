import { ReactNode } from 'react';

import styles from './RootLayout.module.scss';

interface IRootLayout {
	renderHeader?: () => ReactNode;
	renderFooter?: () => ReactNode;
	renderMainContent: () => ReactNode;
	renderSidebarLeft?: () => ReactNode;
	renderSidebarRight?: () => ReactNode;
}

const RootLayout = ({
	renderMainContent,
	renderSidebarLeft,
	renderSidebarRight,
}: IRootLayout) => {
	return (
		<div className={styles.layout}>
			<section className={styles.sidebarLeft}>{renderSidebarLeft?.()}</section>
			<div className={styles.mainContent}>{renderMainContent?.()}</div>
			<section className={styles.sidebarRight}>
				{renderSidebarRight?.()}
			</section>
		</div>
	);
};

export default RootLayout;
