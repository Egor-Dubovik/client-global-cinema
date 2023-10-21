import type { Metadata } from 'next';

import { APP_NAME } from '@/shared/config/seo/constants';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({ title: `Home | ${APP_NAME}`, description: 'Home page' });

export default function Home() {
	return <main>Home</main>;
}
