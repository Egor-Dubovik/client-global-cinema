import type { Metadata } from 'next';

import { Heading } from '@/shared/UI/Heading';
import { APP_NAME } from '@/shared/config/seo/constants';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: `Home | ${APP_NAME}`,
	description: 'Watch movies and TV shows inline or stream right to your browser',
});

export default function Home() {
	return (
		<main>
			<Heading title="Watch movies online" className="text-gray-500 mb-8" variant="h1" />
		</main>
	);
}
