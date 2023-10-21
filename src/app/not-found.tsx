'use client';

import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/UI/Button';
import { APP_NAME } from '@/shared/config/seo/constants';
import { createMetadata } from '@/shared/config/seo/meta.config';

export default function NotFound() {
	const router = useRouter();

	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Button onClick={() => router.back()}>go back</Button>
		</div>
	);
}
