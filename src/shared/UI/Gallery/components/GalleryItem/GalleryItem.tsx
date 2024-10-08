import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { IGalleryItemProps } from '@/shared/UI/Gallery/types';

import styles from './GalleryItem.module.scss';

export const GalleryItem = ({ item, variant }: IGalleryItemProps) => {
	return (
		<Link
			href={item.link}
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image src={item.posterPath} alt={item.name} layout="fill" draggable={false} priority />
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && <div className={styles.subTitle}>{item.content.subTitle}</div>}
				</div>
			)}
		</Link>
	);
};
