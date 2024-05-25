import { GalleryItem } from '@/shared/UI/Gallery/components/GalleryItem/GalleryItem';
import { IGalleryItem } from '@/shared/UI/Gallery/types';

import styles from './Gallery.module.scss';

interface IProps {
	items: IGalleryItem[];
	variant: 'horizontal' | 'vertical';
}

export const Gallery = ({ items, variant }: IProps) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem key={item.link} item={item} variant={variant} />
			))}
		</div>
	);
};
