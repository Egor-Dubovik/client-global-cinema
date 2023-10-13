'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IMenuItem } from '@/components/Menu/menu.interface';
import MaterialIcon from '@/components/UI/MaterialIcon';

import styles from './MenuItem.module.scss';

interface IMenuItemProps {
	className?: string;
	item: IMenuItem;
}

const MenuItem = ({ item }: IMenuItemProps) => {
	const pathname = usePathname();

	return (
		<li
			className={cn(styles.item, { [styles.active]: pathname === item.link })}
		>
			<Link className={styles.itemLink} href={item.link}>
				{item.icon && <MaterialIcon name={item.icon} />}
				<span>{item.title}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
