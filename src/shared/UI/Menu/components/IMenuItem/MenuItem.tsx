'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MaterialIcon from '@/shared/UI/MaterialIcon';
import { IMenuItem } from '@/shared/UI/Menu/types';

import styles from './MenuItem.module.scss';

interface IMenuItemProps {
	className?: string;
	item: IMenuItem;
}

export const MenuItem = ({ item }: IMenuItemProps) => {
	const pathname = usePathname();

	return (
		<li className={cn(styles.item, { [styles.active]: pathname === item.link })}>
			<Link className={styles.itemLink} href={item.link}>
				{item.icon && <MaterialIcon name={item.icon} />}
				<span>{item.title}</span>
			</Link>
		</li>
	);
};
