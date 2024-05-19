import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ISlide } from '@/shared/UI/Slider/types';

import styles from './SlideItem.module.scss';

interface IProps {
	slide: ISlide;
	buttonTitle?: string;
}

export const SlideItem = ({ slide, buttonTitle }: IProps) => {
	const { push } = useRouter();
	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<Image
					src={slide.bigPoster}
					alt={slide.title}
					layout="fill"
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	);
};
