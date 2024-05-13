import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './AdminNavItem.module.scss';

interface IProps {
	children: React.ReactNode;
	link: string;
}

export const AdminNavItem = ({ children, link }: IProps) => {
	const pathname = usePathname();

	return (
		<li className={styles.item}>
			<Link href={link} className={cn(styles.link, { [styles._active]: pathname === link })}>
				{children}
			</Link>
		</li>
	);
};
