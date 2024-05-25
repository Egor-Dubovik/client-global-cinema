import parse from 'html-react-parser';

import { Gallery, IGalleryItem } from '@/shared/UI/Gallery';
import { Heading } from '@/shared/UI/Heading';
import { Text } from '@/shared/UI/Text';

import styles from './Catalog.module.scss';

export interface IProps {
	title: string;
	description?: string;
	items: IGalleryItem[];
}

export const Catalog = ({ items, title, description }: IProps) => {
	return (
		<div>
			<div className={styles.textContent}>
				<Heading className={styles.title} title={title} />
				{description && <Text className={styles.description}>{parse(description)}</Text>}
			</div>
			<Gallery className={styles.gallery} items={items} variant="horizontal" />
		</div>
	);
};
