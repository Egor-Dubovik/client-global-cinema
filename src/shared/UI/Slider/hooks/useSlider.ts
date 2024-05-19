import { useState } from 'react';

import { INIT_VALUE } from '@/shared/constants/numbers';

export const useSlider = (length: number) => {
	const [currentIdex, setCurrentIdex] = useState(INIT_VALUE);
	const [slideIn, setSlideIn] = useState(true);

	const isExistNext = currentIdex + 1 < length;
	const isExistPrev = currentIdex ? currentIdex - 1 < length : false;

	const handleArrowClick = (direction: 'next' | 'prev') => {
		setSlideIn(false);

		setTimeout(() => {
			setCurrentIdex(direction === 'next' ? currentIdex + 1 : currentIdex - 1);
			setSlideIn(true);
		}, 300);
	};

	return {
		index: currentIdex,
		slideIn,
		isNext: isExistNext,
		isPrev: isExistPrev,
		handleClick: handleArrowClick,
	};
};
