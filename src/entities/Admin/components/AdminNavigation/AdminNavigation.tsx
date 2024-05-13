import { AdminNavItem } from '@/entities/Admin/components/AdminNavItem/AdminNavItem';
import { ADMIN_NAV_ITEMS } from '@/entities/Admin/constants';

import styles from './AdminNavigation.module.scss';

export const AdminNavigation = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{ADMIN_NAV_ITEMS.map((item, index) => (
					<AdminNavItem key={index} link={item.link}>
						{item.title}
					</AdminNavItem>
				))}
			</ul>
		</nav>
	);
};
