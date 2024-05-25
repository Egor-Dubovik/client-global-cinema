import cn from 'classnames';

import { GalleryItem } from '@/shared/UI/Gallery/components/GalleryItem/GalleryItem';
import { IGalleryItem } from '@/shared/UI/Gallery/types';

import styles from './Gallery.module.scss';

interface IProps {
	items: IGalleryItem[];
	variant: 'horizontal' | 'vertical';
	className?: string;
}

export const Gallery = ({ items, variant, className }: IProps) => {
	return (
		<div className={cn(styles.gallery, className)}>
			{items.map((item) => (
				<GalleryItem key={item.link} item={item} variant={variant} />
			))}
		</div>
	);
};
