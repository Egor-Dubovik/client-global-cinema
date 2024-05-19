'use client';

import { CSSTransition } from 'react-transition-group';

import { SlideArrow } from '@/shared/UI/Slider/components/Arrow/Arrow';
import { SlideItem } from '@/shared/UI/Slider/components/SlideItem/SlideItem';
import { useSlider } from '@/shared/UI/Slider/hooks/useSlider';
import { ISlide } from '@/shared/UI/Slider/types';

import styles from './Slider.module.scss';

interface IProps {
	slides: ISlide[];
	buttonTitle?: string;
}

export const Slider = ({ slides, buttonTitle }: IProps) => {
	const { index, isNext, isPrev, slideIn, handleClick } = useSlider(slides.length);

	return (
		<div className={styles.slider}>
			<CSSTransition classNames="slide-animation" in={slideIn} timeout={300} unmountOnExit>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && <SlideArrow variant="left" clickHandler={() => handleClick('prev')} />}
			{isNext && <SlideArrow variant="right" clickHandler={() => handleClick('next')} />}
		</div>
	);
};
