import Link from 'next/link';

import { Text } from '@/shared/UI/Text';

import styles from './styles.module.scss';

interface IProps {
	text: string;
	linkText: string;
	href: string;
}

export const FormLinkText = ({ text, linkText, href }: IProps) => {
	return (
		<Text>
			{text}{' '}
			<Link className={styles.link} href={href}>
				{linkText}
			</Link>
		</Text>
	);
};
