import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import { PRIMARY_COLOR } from '@/shared/config/seo/constants';

const ProgressBarProvider = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NextTopLoader
				color={PRIMARY_COLOR}
				initialPosition={0.08}
				crawlSpeed={200}
				height={3}
				crawl={true}
				showSpinner={false}
				easing="ease"
				speed={200}
			/>
			{children}
		</>
	);
};

export default ProgressBarProvider;
