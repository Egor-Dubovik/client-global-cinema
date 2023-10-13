import { IRootLayout } from '@/components/RootLayout/RootLayout.interface';

import styles from './RootLayout.module.scss';

const RootLayout = ({
	renderHeader,
	renderFooter,
	renderMainContent,
	renderSidebarLeft,
	renderSidebarRight,
}: IRootLayout) => {
	return (
		<div className={styles.layout}>
			<header className="header">{renderHeader?.()}</header>
			<section className={styles.sidebarLeft}>{renderSidebarLeft?.()}</section>
			<div className={styles.mainContent}>{renderMainContent?.()}</div>
			<section className={styles.sidebarRight}>
				{renderSidebarRight?.()}
			</section>
			<footer className="footer">{renderFooter?.()}</footer>
		</div>
	);
};

export default RootLayout;
