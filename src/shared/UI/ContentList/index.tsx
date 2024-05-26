import Link from 'next/link';
import { Fragment } from 'react';

import styles from './ContentList.module.scss';

interface ILink {
	_id: string;
	link: string;
	title: string;
}

interface IProps {
	name: string;
	links: ILink[];
}

export const ContentList = ({ name, links }: IProps) => {
	return (
		<div className={styles.contentList}>
			<div className={styles.name}>{name}:</div>
			<ul className={styles.links}>
				{links.map((itemLink, index) => (
					<Fragment key={itemLink._id}>
						<Link href={itemLink.link}>{itemLink.title}</Link>
						{index + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</ul>
		</div>
	);
};
