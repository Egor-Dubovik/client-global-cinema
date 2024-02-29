import NextTopLoader from 'nextjs-toploader';

import { PRIMARY_COLOR } from '@/shared/config/seo/constants';

import { HEIGHT, INIT_POSITION, SPEED } from './constants';

export const TopLoader = () => {
	return (
		<NextTopLoader
			color={PRIMARY_COLOR}
			initialPosition={INIT_POSITION}
			crawlSpeed={SPEED}
			height={HEIGHT}
			crawl={true}
			showSpinner={false}
			easing="ease"
			speed={SPEED}
		/>
	);
};
