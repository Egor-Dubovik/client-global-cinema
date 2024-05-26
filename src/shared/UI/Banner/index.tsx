import Image from 'next/image';

import styles from './Banner.module.scss';

interface IProps {
	src: string;
	alt: string;
	children?: React.ReactNode;
}

export const Banner = ({ src, alt, children }: IProps) => {
	return (
		<div className={styles.banner}>
			<Image
				src={src}
				alt={alt}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
			/>
			{children && children}
		</div>
	);
};
